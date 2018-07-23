let fs = require('fs');

/*
* fs.truncate 截断文件本质是先清除文件内容，然后修改文件尺寸的操作
* 其对应的同步方法：fs.truncateSync
* */

fs.truncate('../../test/截断文件/test.txt',10,(error)=>{

    if (error){

        console.log('截断文件失败：',error);
    }else{

        console.log('截断文件成功')
        fs.lstat('../../test/截断文件/test.txt',(lstatErr,stats)=>{

            console.log('，当前文件大小：',stats.size)
        })
    }
})