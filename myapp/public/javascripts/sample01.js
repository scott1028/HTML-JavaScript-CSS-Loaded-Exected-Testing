'use strict';

document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed", (new Date).getTime());
});


document.addEventListener("readystatechange", function(e) {
    console.log("ReadyStateChange", document.readyState, (new Date).getTime());
});
