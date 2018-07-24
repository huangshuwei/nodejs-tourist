/*
* ReadStream 的pipe(dest,[options]) 方法进行文件的复制操作
*
* [option] : {end:true} 默认为true ,那么在写完后则会关闭，如果end 为false 则可以继续写入
* */


let fs = require('fs');

let path = '../../test/section-使用流文件操作文件/readStream 和 writeStream 结合/';
let readStream = fs.createReadStream(path + 'message.txt');
let writeStream = fs.createWriteStream(path+'other.txt');

// end 为 false 则写入后不会关闭目标文件
readStream.pipe(writeStream,{end:false})

readStream.on('end',()=>{

    writeStream.end(' \r\n bye !');
})