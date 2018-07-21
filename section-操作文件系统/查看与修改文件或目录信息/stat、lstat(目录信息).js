let fs = require('fs')

/*
* fs.stat 与 fs.lstat 唯一的区别是：当查看文件链接符号信息时必须使用 lstat
*
* 与其对应的同步方法： fs.statSync fs.lstatSync
* */

fs.lstat('../../test',(error,lstats)=>{

    if (error){
        console.log('查看目录信息出错',error)
    }else{

        console.log(lstats)
    }
})