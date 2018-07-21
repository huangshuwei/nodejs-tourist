let fs = require('fs');

fs.mkdir('../../test/这是动态创建的目录',(error)=>{

    if (error){

        let errorMsg = ''
        if (error.code === 'EEXIST'){
            errorMsg = '已存在同名目录'
        }
        console.log('创建目录失败：',errorMsg)
    }else{
        console.log('创建目录成功')
    }
})