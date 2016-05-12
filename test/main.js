var express = require('express');
var router = express.Router();

var fs = require("fs");


fs.readFile('./test/input2.txt', function (err, data) {
    if (err) return console.error(err.stack);
    console.log(data.toString());
});

console.log("程序执行结束!");


module.exports = router;



