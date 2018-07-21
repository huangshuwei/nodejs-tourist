let fs = require('fs');

fs.readdir('../../test',(error,files)=>{

    if (error){
        console.log('读取目录失败')
    }else{
        console.log(files)
    }
})