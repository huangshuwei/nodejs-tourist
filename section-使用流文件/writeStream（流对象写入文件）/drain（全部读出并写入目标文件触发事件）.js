let fs = require('fs');

let path = '../../test/section-使用流文件/createWriteStream/';

let writeStream = fs.createWriteStream(path + 'test-drain.txt');

for(var i=0;i<10000;i++){

    let hasMemory = writeStream.write(i.toString());
    console.log(hasMemory)
}

writeStream.on('drain',()=>{

    console.log('全部读出并写入目标文件触发事件')
})