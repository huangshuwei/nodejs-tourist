let fs = require('fs');

/*
* fs.watch 可以对文件和目录进行监视
* 如果作为文件监视，没有fs.watchFile 详细
*
* 回调函数 (event,fileName)
* event 为 rename 时：文件被重命名、移动或者删除
*
* */

var watcher = fs.watch('../../test/监视文件和目录变化', {persistent: true}, (event, fileName) => {

    console.log('event:', event);
    console.log('fileName:', fileName);
})

//当需要对文件停止监视时
//watcher.close();
