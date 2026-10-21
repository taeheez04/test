const async = require("async");
let timestamp = new Date().getTime();

async.waterfall([
    function (callback) {
        setTimeout(function () {
            console.log("나는");
            callback(null, "나는");
        }, 2000);
    },
    function (arg, callback) {
        setTimeout(function () {
            console.log("김태희");
            callback(null, "김태희");
        }, 1000);
    },  
    function (arg, callback) {
        setTimeout(function () {
            console.log("입니다.");
            callback(null, "입니다.");
        }, 3000);
    }
], function (err, results) {
    console.log(results, " in ", new Date().getTime() - timestamp, "ms");
});