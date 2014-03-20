
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
        markPeaks();
    }

    // For each doi definition, map to a visual layout by recording the y-position.
    // Need to re-run if the page refreshes.
    function mapDOMtoPosition() {
        var i;
        var node;
        for (i = 0; i < config.doi.length; i++) {
            node = config.doi[i]["node"];
            config.doi[i]["y"] = node.offsetTop;
        }
        console.log(config.doi);
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

    function autoScroll() {
        var elapsed, delta, snappingIntensity = 0.5;

        if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = -amplitude * Math.exp(-elapsed / config.timeConstant);
            console.log(delta);
            if (peakIncluded) {
                snappingIntensity = 10;
            }
            if (delta > snappingIntensity || delta < -snappingIntensity) {
                scroll(target + delta);
                requestAnimationFrame(autoScroll);
            } else {
                scroll(target);
            }
        }
    }

    function tap(e) {
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

    function getPeak(n1, n2) {
        var smaller = n1 < n2 ? n1 : n2;
        var larger = n1 >= n2 ? n1 : n2;
        var peak;
        var i;
        for (i = 0; i < config.doi.length; i++) {
            // console.log(config.doi[i]);
            if (smaller <= config.doi[i]["y"] && config.doi[i]["y"] <= larger) {
                peak = config.doi[i]["y"];
                // direction-aware. when swiping up, get the last one.
                if (n1 < n2) {
                    break;
                }
            }
        }
        console.log(smaller, larger, peak);
        return peak;
    }

    function markPeaks() {
        var i;
        for (i = 0; i < config.doi.length; i++) {
            $("<div/>").addClass("peak").css("top", config.doi[i]["y"]).appendTo("#view");
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
        var peakTarget = getPeak(offset, target);
        if (typeof peakTarget !== "undefined") {
            peakIncluded = true;
            target = peakTarget;
        }
        console.log("peak", target);
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