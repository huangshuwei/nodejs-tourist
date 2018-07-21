var fs = require('fs');

fs.writeFile('../test/test2.txt','这是一行\r\n这是另一个行',(err,data)=>{

    if (err){
        console.log('写入失败')
    }else{
        console.log('写入成功')
    }
})