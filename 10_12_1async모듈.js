const fs = require("fs");
const async = require("async");

async.parallel({
    fileA: (callback) => {
        fs.readFile(__dirname+"/10_12_fileA.txt", "utf8", callback);
    },
    fileB: (callback) => {
        fs.readFile(__dirname+"/10_12_fileB.txt", "utf8", callback);
    },
    fileC: (callback) => {
        fs.readFile(__dirname+"/10_12_fileC.txt", "utf8", callback);
    },
}, (error, results) => {
    console.log(results.fileA);
    console.log(results.fileB);
    console.log(results.fileC);
    console.log(results)
});