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

router.get('/sample01.jpg', function(req, res, next) {
    res.set({
        'Content-Type': 'image/jpeg'
    });

    var fs = require('fs');
    var obj;
    setTimeout(function(){
        console.log('respond with a Image file!');
        fs.readFile('./routes/sample01.jpg', function (err, data) {
            console.log(data, err);
            res.send(data);
        });
    }, 2000);
});

router.get('/streaming', function(req, res, next) {
    res.set({
        'Content-Type': 'text/event-stream'
    });

    setInterval(function(){
        res.write((new Date).toJSON() + "\n");
    }, 1000);
});

module.exports = router;
