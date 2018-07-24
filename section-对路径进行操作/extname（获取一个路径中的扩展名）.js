/*
* 获取一个路径中的扩展名
* */

let path = require('path');

console.log(path.extname('/s/a/index.html')) // .html

console.log(path.extname('../a/s/a/index.tml')) // .tml

console.log(path.extname('../a/s/a/index.')) // .

console.log(path.extname('../a/s/a/index')) // ''