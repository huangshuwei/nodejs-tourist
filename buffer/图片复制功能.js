let fs = require('fs');

/*fs.readFile('./a.gif','base64',(readErr,data)=>{

    if (readErr){
        console.log('读取图片失败')

    }else{

        fs.writeFile('../test/img/b.png',data.toString(),'base64',(writeErr)=>{

            if (writeErr){

                console.log('写入图片失败');
            }else{

                console.log('写入图片成功');
            }
        })
    }
})*/


// es6
let readFile = new Promise((resolve, reject) => {

    fs.readFile('./a.gif', 'base64', (readErr, data) => {

        if (readErr) {

            return reject(readErr)
        } else {

            return resolve(data)
        }
    })

})


readFile.then(data => {

    fs.writeFile('../test/img/b.png', data.toString(), 'base64', (writeErr) => {

        if (writeErr) {

            console.log('写入图片失败');
        } else {

            console.log('写入图片成功');
        }
    })
}).catch(err => {

    console.log('读取图片失败')
})


