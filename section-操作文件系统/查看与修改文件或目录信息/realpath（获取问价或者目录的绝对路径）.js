let fs = require('fs')


/*
* fs.realpath 可以获取目录或者文件的绝对路径
* 其同步方法为 realpathSync
* */

fs.realpath('../../test',null,(error,resolvedPath)=>{

    if (error){
        console.log('获取目录绝对路径失败',error)
    }else{
        console.log('获取目录绝对路径成功：',resolvedPath)
    }
})

fs.realpath('../../test/hello2.txt',null,(error,resolvedPath)=>{

    if (error){
        console.log('获取文件绝对路径失败',error)
    }else{

        console.log('获取文件绝对路径成功：',resolvedPath)
    }
})