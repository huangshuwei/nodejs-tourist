let fs = require('fs');


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

function writeFile() {

    let filePromise = openFile();

    filePromise.then(fd => {

        let buf = new Buffer('我喜爱编程');

        fs.write(fd, buf, 6, 6, 0, (error, bytesWrite, buffer) => {

            if (error){
                console.log('写入文件失败')
            }else{
                console.log('写入文件成功')
            }

            fs.fsync(fd,()=>{}); // 确保内存缓存区的剩余数据也写到文件中
            fs.close(fd,()=>{
                console.log('文件已被关闭')
            });
        })
    }).catch(error => {

        console.log(error)
    })
}

writeFile();