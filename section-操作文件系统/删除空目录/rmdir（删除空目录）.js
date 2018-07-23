let fs = require('fs');

/*
* fs.rmdir 删除空目录操作，如果目录不为空则会抛异常
* 其对应的同步方法为 fs.rmdirSync
* */

fs.rmdir('../../test/rmdirtest/dirchild2',(error)=>{

    if (error){

        console.log('删除空目录失败：',error)
    }else{
        console.log('删除空目录成功')
    }
})