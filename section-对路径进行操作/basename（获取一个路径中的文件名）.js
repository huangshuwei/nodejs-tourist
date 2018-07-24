/*
* 获取一个路径中的文件名
*
* path.basename(path,[ext])  当设置 ext 后 ，返回结果中则不会包含 ext
* */

let path = require('path');

console.log(path.basename('/s/a/index.html')) // index.html

console.log(path.basename('../a/s/a/index.html','.html')) // index

console.log(path.basename('../a/s/a/index.html','html')) // index.

console.log(path.basename('../a/s/a/index.html','png')) // index.html