kinetic-scrolling
=================

Javascript library that applies kinetic scrolling within a web page based on a degree-of-interest.

p1.html contains an example.

scroll.js is the main library.

How-to
------
1. Create an HTML file to apply kinetic scrolling to.
2. Include the required CSS and Javascript. (refer to p1.html for examples)
```html
      <link rel="stylesheet" href="css/pure-nr-min.css">
      <link rel="stylesheet" href="css/style.css">
```
```html
      <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
      <script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js" type="text/javascript"><\/script>')</script>
      <script src="js/raf.js"></script>
      <script src="js/scroll.js"></script>
```
3. Define your DOI function, following the format below.
    - "node": HTMLElement object of the node representing this DOI
    - "val": strength of the signal (higher the better, min: 0, default: 0)
```javascript
        var doi = [
            {"node": entries[20], "val": 30},
            {"node": entries[35], "val": 20},
            {"node": entries[60], "val": 50},
            {"node": entries[100], "val": 10},
            {"node": entries[180], "val": 40}
        ];
```
4. Run KineticScrolling.init() with configuration parameters.
For a full list of options, refer to scroll.js.
For a minimal setup, include "contentID" (DOM ID of the entire page) and "doi" (the DOI function definition).
```javascript
        KineticScrolling.init({
            "contentID": "view",
            "doi": doi
        });
```