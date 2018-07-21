let fs = require('fs');


function openFile() {

    return new Promise((resolve, reject) => {

        fs.open('../../test/从指定位置开始读写文件/read.txt', 'r', (error, fd) => {

            if (error) {
                reject(error)
            } else {

                resolve(fd);
            }
        })
    })
}

function readFile() {

    let filePromise = openFile();

    filePromise.then(fd => {

        let buf = new Buffer(255);

        fs.read(fd, buf, 0, 9, 3, (error, bytesRead, buffer) => {

            console.log(buffer.slice(0, bytesRead).toString())
            console.log(bytesRead)
        })
    }).catch(error => {

        console.log(error)
    })
}

readFile();