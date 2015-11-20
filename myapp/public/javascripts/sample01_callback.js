setTimeout(function() {
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };

    console.log('Start sleep in sample01_callback.js');
    sleep(3000);
    console.log('End sleep in sample01_callback.js');
}, 0);
