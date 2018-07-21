let fs = require('fs')

/*
* fs.exists 既可以检查目录是否存在也可以检查文件是否存在
* */

fs.exists('../../test', isExists => {

    if (isExists){

        console.log('这个目录存在')
    }else{

        console.log('这个目录不存在')
    }
})


fs.exists('../../test/hello2.txt', isExists => {

    if (isExists){

        console.log('这个文件存在')
    }else{

        console.log('这个文件不存在')
    }
})