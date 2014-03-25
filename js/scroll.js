
var KineticScrolling = function ($, window, document) {
    "use strict";
    var svgns = "http://www.w3.org/2000/svg";
    var config = {
        // the DOM ID for the content to apply kinetic scrolling to.
        // Simplest would be to apply to body, which applies to the whole page.
        contentID: "kscroll-view",

        // the DOM ID for the indicator (scrollbar replacement)
        indicatorID: "kscroll-indicator",

        // the DOM ID for the swing head
        swingheadID: "kscroll-swinghead",
        swingCanvasID: "kscroll-canvas",
        TopID: "kscroll-swingarmTop",
        swingarmBottomID: "kscroll-swingarmBottom",

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

        // When constructing a hill around a doi, how wide should it be? (in pixels)
        // doiRange * 2 is the full range (uphill + downhill)
        doiRange: 500
    };

    var view, indicator, relative,
        min, max, offset, reference, pressed, xform,
        velocity, frame, timestamp, ticker,
        amplitude, target;
    var paper; // Raphael js
    var peakIncluded;
    var armTopPath, armBottomPath;

    function isElementInViewport (el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

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

        $("<div/>")
            .attr("id", config.indicatorID)
            .addClass("kscroll-indicator")
            .appendTo("body");
        $("<div/>")
            .attr("id", config.swingheadID)
            .addClass("kscroll-swinghead")
            .appendTo("body");
        paper = Raphael(0, 0, "50%", "100%"); //Raphael("#view", "100%", "100%");
        armTopPath = paper.path("M 0 0 L 0 0");
        armBottomPath = paper.path("M 0 0 L 0 0");
        armTopPath.node.setAttribute("class", "kscroll-swingarm-top");
        armBottomPath.node.setAttribute("class", "kscroll-swingarm-bottom");

        initSwingArms();

        // scrollbar showing on the left
        indicator = document.getElementById(config.indicatorID);
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

    function initSwingArms() {
        armTopPath.attr("path", "M 0 0 L 0 0");
        armBottomPath.attr("path", "M 0 0 L 0 0");
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
        // remove the edge restrictions from the scroll
        offset = y;
        // offset = (y > max) ? max : (y < min) ? min : y;

        view.style[xform] = 'translateY(' + (-offset) + 'px)';
        if (typeof indicator !== "undefined" && indicator !== null)
            indicator.style[xform] = 'translateY(' + (offset * relative) + 'px)';
        else
            console.log ("IND");
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

    var duringPeak = false;
    var peakFreeze = 0;
    // based on the current mouse position,
    // return a time constant penalized by the slope
    function getSlope(offset) {
        // var newTimeConstant = config.timeConstant;
        var i;
        var point;
        var hitPeak = false;
        for (i = 0; i < config.doi.length; i++) {
            // console.log(config.doi[i]);
            point = config.doi[i]["y"];
            // current offset is within the range of a hill caused by this doi
            // hill width: +/-config.doiSnappingPosition
            if (point - config.doiRange <= offset + config.doiSnappingPosition && offset + config.doiSnappingPosition <= point) { // uphill
                if (!duringPeak)
                    peakFreeze = 20;
                duringPeak = true;
                peakFreeze -= 1;
                config.timeConstant *= 5/20;
                // console.log("getSlope", newTimeConstant);
                console.log("UPHILL");
                hitPeak = true;
                break;
            } else if (point < offset + config.doiSnappingPosition && offset + config.doiSnappingPosition <=  point + config.doiRange) {
                if (!duringPeak)
                    peakFreeze = 20;
                duringPeak = true;
                peakFreeze -= 1;
                config.timeConstant *= 20/5;
                if (config.timeConstant > 325)
                    config.timeConstant = 325;
                // console.log("getSlope", newTimeConstant);
                console.log("DOWNHILL");
                hitPeak = true;
                break;
            }
        }
        if (!hitPeak) {
            duringPeak = false;
            config.timeConstant = 325;
        }
        // console.log(smaller, larger, peaks);
        // return {"peaks": peaks, "isReversed": (n1 > n2)};
        // console.log("getSlope", newTimeConstant);
        return config.timeConstant;
    }

    var k;
    function getAmplitude(amplitude, offset) {
        var i;
        var point;
        var hitPeak = false;
        var newAmplitude = amplitude;
        for (i = 0; i < config.doi.length; i++) {
            // console.log(config.doi[i]);
            point = config.doi[i]["y"];
            // current offset is within the range of a hill caused by this doi
            // hill width: +/-config.doiRange
            if (point - config.doiRange <= offset + config.doiSnappingPosition && offset + config.doiSnappingPosition <= point) { // uphill
                if (!duringPeak)
                    peakFreeze = 20;
                duringPeak = true;
                peakFreeze -= 1;
                // console.log("getSlope", newTimeConstant);
                console.log("UPHILL");
                hitPeak = true;
                // newAmplitude = amplitude * 0.95;
                var a = 2 * config.doi[i]["val"] / (config.doiRange * config.doiRange) * (offset + config.doiSnappingPosition - (point - config.doiRange));
                var factor = Math.abs(a / Math.sqrt(a * a + 1));
                // if (typeof k === "undefined")
                    k = 0.99 / factor;
                console.log(a, factor, k, factor * k);
                newAmplitude = amplitude * factor * k;
                break;
            } else if (point < offset + config.doiSnappingPosition && offset + config.doiSnappingPosition <=  point + config.doiRange) {
                if (!duringPeak)
                    peakFreeze = 20;
                duringPeak = true;
                peakFreeze -= 1;
                // console.log("getSlope", newTimeConstant);
                console.log("DOWNHILL");
                hitPeak = true;
                // newAmplitude = amplitude * 0.95;
                var a = 2 * config.doi[i]["val"] / (config.doiRange * config.doiRange) * ((point + config.doiRange) - (offset + config.doiSnappingPosition));
                var factor = Math.abs(a / Math.sqrt(a * a + 1));
                console.log(a, factor);
                newAmplitude = amplitude * factor;
                break;
            }
        }
        if (!hitPeak) {
            duringPeak = false;
        }
        return newAmplitude;
    }

    function getSinTheta() {
        var i;
        var point;
        var hitPeak = false;
        // var newAmplitude = amplitude;
        var a, factor = 0;
        for (i = 0; i < config.doi.length; i++) {
            // console.log(config.doi[i]);
            point = config.doi[i]["y"];
            // current offset is within the range of a hill caused by this doi
            // hill width: +/-config.doiRange
            if (point - config.doiRange <= offset + config.doiSnappingPosition && offset + config.doiSnappingPosition <= point) { // uphill
                console.log("UPHILL");
                a = 2 * config.doi[i]["val"] * 10000 / (config.doiRange * config.doiRange) * (offset + config.doiSnappingPosition - (point - config.doiRange));
                break;
            } else if (point < offset + config.doiSnappingPosition && offset + config.doiSnappingPosition <=  point + config.doiRange) {
                console.log("DOWNHILL");
                a = 2 * config.doi[i]["val"] * 10000 / (config.doiRange * config.doiRange) * ((point + config.doiRange) - (offset + config.doiSnappingPosition));
                break;
            }
        }
        factor = Math.abs(a / Math.sqrt(a * a + 1));
        console.log(a, factor);
        return factor;
    }


    // Render swing arms to an item.
    function renderSwing(curPeak) {
        if (typeof curPeak === "undefined")
            return;
        var node = curPeak["node"];

        if (!isElementInViewport(node)) {
            initSwingArms();
            return;
        }

        var $swingHead = $(".kscroll-swinghead");
        console.log($swingHead.position());
        console.log("SWING", $(node).position().top, $(node).position().left);
        var armTop = "M 10 " + ($swingHead.position().top + 10) + " L " + ($(node).position().left + 200) + " " + $(node).position().top;
        var armBottom = "M 10 " + ($swingHead.position().top + 10) + " L " + ($(node).position().left + 200) + " " + ($(node).position().top + $(node).height());
        console.log(armTop, armBottom);
        // var line = paper.path( "M300,300 L30,100" );
        armTopPath.attr("path", armTop);
        armBottomPath.attr("path", armBottom);
        // $(".kscroll-swingarm-top")
        //     .attr("x1", 10)
        //     .attr("y1", $swingHead.position().top + 10)
        //     .attr("x2", $(node).position().left + 200)
        //     .attr("y2", $(node).position().top);
        // $(".kscroll-swingarm-bottom")
        //     .attr("x1", 10)
        //     .attr("y1", $swingHead.position().top + 10)
        //     .attr("x2", $(node).position().left + 200)
        //     .attr("y2", $(node).position().top + $(node).height());
    }

    // Check if the current offset is within a peak range.
    function isInPeak() {
        var hitPeak = false;
        var curPeak;
        var i, point;
        for (i = 0; i < config.doi.length; i++) {
            // console.log(config.doi[i]);
            point = config.doi[i]["y"];
            // current offset is within the range of a hill caused by this doi
            // hill width: +/-config.doiRange
            if (point - config.doiRange <= offset + config.doiSnappingPosition && offset + config.doiSnappingPosition <= point) { // uphill
                // duringPeak = true;
                // console.log("getSlope", newTimeConstant);
                hitPeak = true;
                curPeak = config.doi[i];
                break;
            } else if (point < offset + config.doiSnappingPosition && offset + config.doiSnappingPosition <=  point + config.doiRange) {
                // duringPeak = true;
                // console.log("getSlope", newTimeConstant);
                hitPeak = true;
                curPeak = config.doi[i];
                break;
            }
        }
        if (hitPeak)
            renderSwing(curPeak);
        else
            initSwingArms();
        return hitPeak;
    }


    var curV;
    var g;
    var curTarget;
    var timeSinceLastCall;
    var oldTime;
    var oldOffset;
    var accel;
    function autoScroll() {
        var elapsed;
        var now = Date.now();
        var isForwardScrolling = true;
        // transition from peak to non-peak
        if (duringPeak && !isInPeak()) {
            console.log("TRANSITION p -> np");
            duringPeak = false;
            amplitude = curV * config.timeConstant;
            // console.log("A", amplitude);
            timestamp = now;
        } else if (!duringPeak && isInPeak()) {
            console.log("TRANSITION np -> p");
            duringPeak = true;
            curV = accel * config.timeConstant;
            g = curV / config.timeConstant;
            // console.log(curV, g);
            timestamp = now;
        }

        timeSinceLastCall = now - oldTime; // total time since last autoScroll call
        oldTime = now;
        elapsed = now - timestamp; // total time since last transition

        // console.log("  TIME", timeSinceLastCall);
        if (duringPeak) {
            accel = g * getSinTheta();
        } else {
            accel = amplitude / (config.timeConstant * config.timeConstant) * Math.exp(-elapsed / config.timeConstant);
        }
        if (accel > 0 && oldOffset >= 0) {
            // console.log("forward");
        } else if (accel < 0 && oldOffset <= 0) {
            // console.log("backward");
            isForwardScrolling = false;
        } else {
            console.log("ERROR: impossible scroll direction");
        }
        // console.log("AAA", accel, oldOffset);
        oldOffset = accel;
        curV = curV - accel * timeSinceLastCall;
        // console.log(timeSinceLastCall, curV * timeSinceLastCall);
        // at least one pixel to move should be available.
        if ((isForwardScrolling && curV * timeSinceLastCall >= 1) ||
            (!isForwardScrolling && curV * timeSinceLastCall <= -1)){
            curTarget = curTarget + curV * timeSinceLastCall;
            curTarget = (curTarget > max) ? max : (curTarget < min) ? min : curTarget;
            scroll(curTarget);
            requestAnimationFrame(autoScroll);
        } else {
            curTarget = (curTarget > max) ? max : (curTarget < min) ? min : curTarget;
            scroll(curTarget);
            console.log("HERE", offset)
        }
        return;
    }



    var storedOffset;
    var interval=0;
    function autoScroll_quadratic() {
        // console.log("      ", parseInt(storedOffset), parseInt(offset), parseInt(offset - storedOffset));
        // if (typeof storedOffset === "undefined") {
        //     storedOffset = offset;
        // } else {
        //     storedOffset = offset;
        // }

        var newTimeConstant = config.timeConstant; //getSlope(offset);
        var elapsed, delta, newTarget;
        var snappingIntensity = 0.5;
        if (amplitude) {
            elapsed = Date.now() - timestamp;
            // console.log(elapsed-interval);
            // interval = elapsed;
            var newAmplitude = getAmplitude(amplitude, offset);
            // var newAmplitude = amplitude;
            delta = -newAmplitude * Math.exp(-elapsed / newTimeConstant);
            // delta = amplitude * elapsed/1000 + 0.5 * (-0.000325) * elapsed * elapsed;
            // if (delta >)
            console.log(offset, delta);
            // add the edge restrictions to auto scroll instead
            newTarget = (target > max) ? max : (target < min) ? min : target;
            // console.log("TARGET", newTarget, parseInt(target + delta));

            if (duringPeak)
                snappingIntensity = 20;
            if (delta > snappingIntensity || delta < -snappingIntensity) {
                scroll(newTarget + delta);
                requestAnimationFrame(autoScroll);
            } else {
                scroll(newTarget);
                console.log("HERE", offset)
            }
        }
        return;
    }


    function autoScroll_original() {

        var elapsed, delta;
        if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = -amplitude * Math.exp(-elapsed / config.timeConstant);
            if (delta > 5 || delta < -5) {
                scroll(target + delta);
                requestAnimationFrame(autoScroll);
            } else {
                scroll(target);
            }
        }
    }


    function autoScroll_pause30() {
        var i, curPeak;
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
            // elapsed = Date.now() - timestamp;
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
                    for (i = 0; i < peaksInRange["peaks"].length; i++) {
                        curPeak = peaksInRange["peaks"][i];
                        if (!curPeak["dirty"] && curPeak["val"] >= 50) {
                            recentDelta = delta;
                            scroll(target + recentDelta);
                            // update target based on how much we lost due to peak friction
                            // target += 0.95 * delta;
                            penaltyCount = 30;
                            isTimeUpdated = false;
                            timeFreeze = Date.now();
                            $("#" + curPeak['id'])
                                .stop(true, true) // cancel any pending fadeout
                                .show()
                                .css("background-color", "rgba(200,0,0," + curPeak["val"]/100 + ")")
                                .fadeOut(3000);
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
            $("<div/>")
                .addClass("peak-item")
                .attr("id", config.doi[i]["id"] + "-peak-item")
                .css("top", config.doi[i]["y"])
                .appendTo(view);
            var relHeight = (config.doiRange * 2 * 100 / $("#" + config.contentID).height());
            var relTop = (config.doi[i]["y"]*100 / $("#" + config.contentID).height());
            $("<div/>")
                .addClass("peak-summary")
                .attr("id", config.doi[i]["id"] + "-peak-summary")
                .css("top", (relTop - relHeight / 2) + "%")
                .css("left", 0)
                .css("border-top", (relHeight / 2 / 100 * window.screen.height) + "px solid transparent")
                .css("border-bottom", (relHeight / 2 / 100 * window.screen.height) + "px solid transparent")
                .css("border-left", config.doi[i]["val"] / 2 + "px solid rgba(0, 200, 0, 0.5)")
                // .css("width", (config.doi[i]["val"] / 2) + "px")
                // .css("height", relHeight + "%")
                .appendTo($("body"));
        }
    }

    function release(e) {
        pressed = false;

        clearInterval(ticker);
        if (velocity > 10 || velocity < -10) {
            // amplitude = 0.8 * velocity;
            // target = offset + amplitude;
            target = Math.round(offset + (0.8 * velocity));

            target = target > max ? max : target < min ? min : target;
            amplitude = target - offset;
            timestamp = Date.now();


// new version
            curV = 0.8 * velocity / config.timeConstant;
            g = 0.8 * velocity / (config.timeConstant * config.timeConstant);
            curTarget = offset;
            timeSinceLastCall = 0;
            oldTime = timestamp;
            oldOffset = 0;

            requestAnimationFrame(autoScroll);

        }
        // var peakTarget = getPeaksInRange(offset, target);
        // if (peakTarget["peaks"].length > 0) {
        //     peakIncluded = true;
        //     if (peakTarget["isReversed"])
        //         target = peakTarget[peakTarget["peaks"].length - 1];
        //     else
        //         target = peakTarget[0];
        // }
        // console.log("peak", target);

        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    return {
        init: init
    };
}(jQuery, window, document);