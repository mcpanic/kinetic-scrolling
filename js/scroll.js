
var KineticScrolling = function ($, window, document) {
    "use strict";

    var config = {
        // the DOM ID for the content to apply kinetic scrolling to.
        // Simplest would be to apply to body, which applies to the whole page.
        contentID: "view",

        // the DOM ID for the indicator (scrollbar replacement)
        indicatorID: "indicator",

        // DOI definition as an array of objects
        // "node": HTMLElement object of the node representing this DOI
        // "val": strength of the signal (higher the better, min: 0, default: 0)
        // doi: [{450, 10}, {900, 20}, {1800, 5}, {3600, 40}],
        doi: [
            {"node": null, "val": 10},
            {"node": null, "val": 50},
            {"node": null, "val": 30},
            {"node": null, "val": 20},
            {"node": null, "val": 40}
        ],

        // is the DOI function defined for DOM nodes or y-position pixel values?
        doiOnDOM: true,

        // unit: ms
        timeConstant: 325,

        // DOI snapping position: when decelerating or snapping around DOI points,
        // where should it be relative to the screen size? (in pixels from the top)
        doiSnappingPosition: 0,
    };

    var view, indicator, relative,
        min, max, offset, reference, pressed, xform,
        velocity, frame, timestamp, ticker,
        amplitude, target;
    var peakIncluded;

    function init(configInput) {
        if (typeof configInput === "object") {
            // config = configInput;
            var key;
            for (key in configInput) {
                if (config.hasOwnProperty(key)) {
                    config[key] = configInput[key];
                } else {
                    console.log("Invalid config name:", key);
                }
            }
            console.log(config);
        } else {
            console.log("Error: no config object detected.");
        }

        view = document.getElementById(config.contentID);
        if (view === null) {
            console.log("Error: Invalid content ID provided.");
            return;
        }

        // register all event handlers that hijack the default mouse/touch events
        bindEvents();

        // initial setup
        max = parseInt(getComputedStyle(view).height, 10) - innerHeight;
        offset = min = 0;
        pressed = false;
        peakIncluded = false;
        // timeConstant = config.timeConstant;

        // scrollbar showing on the left
        indicator = document.getElementById('indicator');
        relative = (innerHeight - 30) / max;

        // setting up CSS transform for cross-browser support
        xform = 'transform';
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
            var e = prefix + 'Transform';
            if (typeof view.style[e] !== 'undefined') {
                xform = e;
                return false;
            }
            return true;
        });

        refresh();
    }

    function bindEvents() {
        if (typeof window.ontouchstart !== 'undefined') {
            view.addEventListener('touchstart', tap);
            view.addEventListener('touchmove', drag);
            view.addEventListener('touchend', release);
        }
        view.addEventListener('mousedown', tap);
        view.addEventListener('mousemove', drag);
        view.addEventListener('mouseup', release);
    }

    // The page layout has changed, so refresh the data to reflect the updated layout.
    function refresh() {
        mapDOMtoPosition();
        resetDirty();
        markPeaks();
    }

    // For each doi definition, map to a visual layout by recording the y-position.
    // Need to re-run if the page refreshes.
    function mapDOMtoPosition() {
        var i;
        var node;
        for (i = 0; i < config.doi.length; i++) {
            node = config.doi[i]["node"];
            config.doi[i]["id"] = "doi-" + i;
            config.doi[i]["y"] = node.offsetTop;
        }
        config.doiSnappingPosition = screen.height / 2.5;
        console.log(config.doi, config.doiSnappingPosition);
        // TODO sort based on offset?
    }

    function resetDirty() {
        var i;
        var node;
        for (i = 0; i < config.doi.length; i++) {
            config.doi[i]["dirty"] = false;
        }
    }

    function ypos(e) {
        // touch event
        if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientY;
        }
        // mouse event
        return e.clientY;
    }

    function scroll(y) {
        offset = (y > max) ? max : (y < min) ? min : y;
        view.style[xform] = 'translateY(' + (-offset) + 'px)';
        indicator.style[xform] = 'translateY(' + (offset * relative) + 'px)';
    }

    function track() {
        var now, elapsed, delta, v;

        now = Date.now();
        elapsed = now - timestamp;
        timestamp = now;
        delta = offset - frame;
        frame = offset;

        v = 1000 * delta / (1 + elapsed);
        velocity = 0.8 * v + 0.2 * velocity;
    }

    var penaltyCount = 0;
    var recentDelta;
    var timeFreezeElapsed = 0;
    var timeFreeze = 0;
    var isTimeUpdated = true;
    function autoScroll() {
        penaltyCount -= 1;
        if (penaltyCount == 0 && !isTimeUpdated) {
            // time interval where no action took place.
            timeFreezeElapsed += Date.now() - timeFreeze;
            console.log("FREEZE", timeFreezeElapsed);
            isTimeUpdated = true;
            // requestAnimationFrame(autoScroll);
            // return;
        }
        var elapsed, delta, snappingIntensity = 0.5, peaksInRange;
        if (amplitude) {
            // time elapsed from the initial release
            elapsed = Date.now() - timestamp - timeFreezeElapsed;
            delta = -amplitude * Math.exp(-elapsed / config.timeConstant);
            peaksInRange = getPeaksInRange(offset, target + delta);
            // if (peakIncluded) {
            if (peaksInRange["peaks"].length > 0) {
                snappingIntensity = 10;
            }
            if (delta > snappingIntensity || delta < -snappingIntensity) {
                // if peak is included in this turn, decelerate based on DOI
                console.log("cur", parseInt(offset), "tar", target, "del", parseInt(delta), peaksInRange["peaks"].length > 0);
                if (peaksInRange["peaks"].length > 0) {
                    for (var i = 0; i < peaksInRange["peaks"].length; i++) {
                        if (!peaksInRange["peaks"][i]["dirty"]) {
                            recentDelta = delta;
                            scroll(target + recentDelta);
                            // update target based on how much we lost due to peak friction
                            // target += 0.95 * delta;
                            penaltyCount = 20;
                            isTimeUpdated = false;
                            timeFreeze = Date.now();
                            $("#" + peaksInRange['peaks'][i]['id']).stop(true, true);
                            $("#" + peaksInRange['peaks'][i]['id']).show().fadeOut(2000);
                            peaksInRange["peaks"][i]["dirty"] = true;
                            console.log("DECEL", peaksInRange["peaks"][i]["id"]);
                        }
                    }
                } else {
                    if (penaltyCount > 0)
                        scroll(target + recentDelta);
                    else
                        scroll(target + delta);
                }
                requestAnimationFrame(autoScroll);
            } else {
                console.log("TARGET reached");
                scroll(target);
            }
        }
    }

    function tap(e) {
        // custom flag reset
        resetDirty();
        timeFreezeElapsed = 0;
        timeFreezeElapsed = 0;
        timeFreeze = 0;
        isTimeUpdated = true;

        pressed = true;
        peakIncluded = false;
        reference = ypos(e);

        velocity = amplitude = 0;
        frame = offset;
        timestamp = Date.now();
        clearInterval(ticker);
        ticker = setInterval(track, 25); // used to be 100

        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    function drag(e) {
        var y, delta;
        if (pressed) {
            y = ypos(e);
            delta = reference - y;
            if (delta > 2 || delta < -2) {
                reference = y;
                scroll(offset + delta);
            }
        }
        e.preventDefault();
        e.stopPropagation();
        return false;
    }


    function getPeaksInRange(n1, n2) {
        var smaller = n1 < n2 ? n1 : n2;
        var larger = n1 >= n2 ? n1 : n2;
        var peaks = [];
        var i;
        var point;
        for (i = 0; i < config.doi.length; i++) {
            // console.log(config.doi[i]);
            point = config.doi[i]["y"] - config.doiSnappingPosition;
            if (smaller <= point && point <= larger) {
                peaks.push(config.doi[i]);
                // direction-aware. when swiping up, get the last one.
                // if (n1 < n2) {
                //     break;
                // }
            }
        }
        // console.log(smaller, larger, peaks);
        return {"peaks": peaks, "isReversed": (n1 > n2)};
    }

    function markPeaks() {
        var i;
        for (i = 0; i < config.doi.length; i++) {
            $("<div/>").addClass("peak").attr("id", config.doi[i]["id"]).css("top", config.doi[i]["y"]).appendTo("#view");
        }
    }

    function release(e) {
        pressed = false;

        clearInterval(ticker);
        if (velocity > 10 || velocity < -10) {
            amplitude = 0.8 * velocity;
            target = offset + amplitude;
        }
        target = Math.round(offset + amplitude);
        console.log(target);
        // var peakTarget = getPeaksInRange(offset, target);
        // if (peakTarget["peaks"].length > 0) {
        //     peakIncluded = true;
        //     if (peakTarget["isReversed"])
        //         target = peakTarget[peakTarget["peaks"].length - 1];
        //     else
        //         target = peakTarget[0];
        // }
        // console.log("peak", target);
        amplitude = target - offset;
        timestamp = Date.now();
        requestAnimationFrame(autoScroll);

        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    return {
        init: init
    };
}(jQuery, window, document);