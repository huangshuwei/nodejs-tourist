/*
* fs.createReadStream 将流数据也如文件中的 WriteStream 对象
*
* 如果写入的文件找不到则会创建该文件，如果目录不存在也会创建该目录
* */


let fs = require('fs');

let path = '../../test/section-使用流文件/';

let writeStream = fs.createWriteStream(path + 'test-drain2.txt');

for(var i=0;i<10000;i++){

    // 其返回值
    let hasMemory = writeStream.write(i.toString());
    console.log(hasMemory)
}

writeStream.on('drain',()=>{

    console.log('全部读出并写入目标文件触发事件')
})

writeStream.on('error',(error)=>{

    console.log('写入文件出错:',error)
})