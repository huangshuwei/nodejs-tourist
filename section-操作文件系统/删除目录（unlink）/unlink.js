/*
* 此方法只能删除一个文件
* */

var fs = require('fs'); // 引入fs模块

fs.unlink('../../test/操作文件系统/删除目录/child',(error)=>{



    console.log('删除成功')
});