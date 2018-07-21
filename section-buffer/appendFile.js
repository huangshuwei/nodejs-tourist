let fs = require('fs');

fs.appendFile('../test/test3.txt','这是追加的数据\r\n','utf8',(error,data)=>{

    if (error){
        console.log('文本追加失败')
    }else{
        console.log('文本追加成功')
    }
})