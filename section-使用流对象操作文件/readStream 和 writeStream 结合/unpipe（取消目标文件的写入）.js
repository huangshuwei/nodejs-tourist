let fs = require('fs');


let path = '../../test/section-使用流文件操作文件/readStream 和 writeStream 结合/';
let readStream = fs.createReadStream(path + 'message.txt');
let writeStream = fs.createWriteStream(path+'other.txt');

readStream.pipe(writeStream,{end:false});

setTimeout(()=>{

    readStream.unpipe(writeStream);
    writeStream.end();
},10)