let fs = require('fs');


/*
* fs.fstat 查看被打开的文件信息
* 一般适用于当使用 fs.open 或者 fs.openSync 后 跟打开的文件描述符（fd） 查询打开文件的信息
*
* 其对应的同步方法为 fs.fstatSync
* */

function openFile() {

    return new Promise((resolve, reject) => {

        fs.open('../../test/从指定位置开始读写文件/write.txt', 'w', (error, fd) => {

            if (error) {
                reject(error)
            } else {

                resolve(fd);
            }
        })
    })
}

function getFileInfo(){

    let openFilePromise = openFile();

    openFilePromise.then(fd=>{

        fs.fstat(fd,(error,fstat)=>{

            if (error){

                console.log('查看文件信息失败')
            }else{

                console.log(fstat)
            }
        })
    })
}

getFileInfo();