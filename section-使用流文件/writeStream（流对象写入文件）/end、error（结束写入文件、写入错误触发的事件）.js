/*
* fs.createReadStream 将流数据也如文件中的 WriteStream 对象
*
* 如果写文件发生了异常则会触发 error 事件
* */


let fs = require('fs');

let path = '../../test/section-使用流文件/createWriteStream/';

let writeStream = fs.createWriteStream(path + 'test-drain.txt');

// 注册 error 事件要在写文件之前
writeStream.on('error',(error)=>{

    console.log('写入文件出错:',error)
})

writeStream.write('一些测试数据')

// 结束文件写入
writeStream.end();

writeStream.write('写入另一些数据')

