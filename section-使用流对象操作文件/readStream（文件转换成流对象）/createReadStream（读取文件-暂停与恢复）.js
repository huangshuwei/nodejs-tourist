/*
*fs.createReadStream 创建一个将文件内容读取为流数据的 ReadStream 对象
*
* ReadStream.pause 暂停 data 事件的触发
* ReadStream.resume 恢复 data 事件的触发
*
* */

let fs = require('fs');

let readStream = fs.createReadStream('../../test/section-使用流文件操作文件/createReadStream/message.txt',{start:0,end:30});

readStream.pause();

readStream.on('open',(fd)=>{

    console.log('开始读取文件')
})

readStream.on('data',(data)=>{

    console.log('读取到数据：',data);
})

readStream.on('end',()=>{

    console.log('文件读取完毕');
})

readStream.on('close',()=>{

    console.log('文件被关闭');
})

readStream.on('error',(err)=>{

    console.log('文件读取失败：',err);
})

setTimeout(()=>{
    readStream.resume();
},2000)