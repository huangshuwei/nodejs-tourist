let fs = require('fs');

/*
* fs.watchFile 监视文件的创建、修改、删除。。。
* 其对应的同步方法为 fs.watchFileSync
*
* 可以使用多个 watchFile 方法对同一个文件进行监视
*
* 参数：
*persistent:true 永久的检测，false 则会退出检测
*
* interval：检测的时间间隔，单位毫秒
*
* */

let interval = 10*1000;

fs.watchFile('../../test/监视文件变化/test.txt', {persistent: true, interval: interval}, (curr, prev) => {

    if (Date.parse(prev.ctime) === 0) {

        console.log('test.txt文件被创建')
    } else if (Date.parse(curr.ctime) === 0) {

        console.log('test.txt文件被删除')
    } else if (Date.parse(prev.ctime) !== Date.parse(curr.ctime)) {

        console.log('test.txt文件被修改')
    }
})