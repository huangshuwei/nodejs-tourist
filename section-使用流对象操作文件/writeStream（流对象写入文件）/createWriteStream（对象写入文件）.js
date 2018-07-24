/*
* fs.createReadStream 将流数据也如文件中的 WriteStream 对象
*
* 如果写入的文件找不到则会创建该文件，如果目录不存在也会创建该目录
* */

let fs = require('fs');


let path = '../../test/section-使用流文件操作文件/createWriteStream/';

let readStream = fs.createReadStream(path + 'message.txt');

let writeStream = fs.createWriteStream(path + 'another-message.txt');

readStream.on('data',(data)=>{

    let hasSpace = writeStream.write(data,()=>{
        console.log('-------这是当前被写入的文件 start-------\r\n',data.toString(),'\r\n-------这是当前被写入的文件 end-------\r\n')
    });

    console.log('缓存区中是否还有空间：',hasSpace)
})

writeStream.on('open',(fd)=>{

    console.log('需要被写入的文件已被打开')
})

readStream.on('end',()=>{

    writeStream.end('文件结尾追加',()=>{

        console.log('文件全部写入完毕')
        console.log('共写入%d字节数据',writeStream.bytesWritten)
    })
})