/*
* path.normalize 可以将非标准的路径字符串转换成标准的路径字符串
* */

let path = require('path');

let testPath = path.normalize('../test/section-对路径进行操作/test.txt')

console.log(testPath)

