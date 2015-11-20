var express = require('express');
var router = express.Router();

router.get('/sample01.js', function(req, res, next) {
    setTimeout(function(){
        console.log('respond with a resource by appJS!');
        res.set({
            'Content-Type': 'text/javascript'
        });
        res.send('console.log("Very Large JavaScript Resouces Loaded!", (new Date).getTime());');
    }, 3000);
});

router.get('/sample01.css', function(req, res, next) {
    setTimeout(function(){
        console.log('respond with a resource by appCSS!');
        res.set({
            'Content-Type': 'text/css'
        });
        res.send('body {background-color: silver;} /*Very Large CSS Resouces Loaded!*/');
    }, 3000);
});

module.exports = router;
