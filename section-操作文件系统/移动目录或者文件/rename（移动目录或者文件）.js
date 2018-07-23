let fs = require('fs');

fs.rename('../../test/rename.txt','../../test/移动目录或者文件/rename2.txt',(error)=>{

    if (error){
        console.log('移动文件失败');
    }else{
        console.log('移动文件并重命名成功')
    }
})