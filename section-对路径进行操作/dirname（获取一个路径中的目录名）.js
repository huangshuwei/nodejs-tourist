/*
* 获取一个路径中的目录
* */

let path = require('path');

console.log(path.dirname('D:\\practice\\nodejs-tourist')) // D:\practice

console.log(path.dirname('D:\\practice\\nodejs-tourist\\section-操作文件系统\\从指定位置开始读写文件')) // D:\practice\nodejs-tourist\section-操作文件系统

console.log(path.dirname('D:\\practice\\nodejs-tourist\\section-操作文件系统\\从指定位置开始读写文件.read（读文件）.js')) //D:\practice\nodejs-tourist\section-操作文件系统

console.log(path.dirname('../tet/img/b.png')) // ../tet/img
