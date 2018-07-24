/*
* 以应用程序目录为起点，根据所有参数返回一个绝对路径
* */


let path = require('path');

let testPath = path.resolve('a','b','c');

console.log(testPath) // D:\practice\nodejs-tourist\section-对路径进行操作\a\b\c
