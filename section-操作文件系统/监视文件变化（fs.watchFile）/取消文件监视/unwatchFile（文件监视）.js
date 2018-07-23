let fs = require('fs');

let watchMod = require('./watchMod');

fs.watchFile(watchMod.filePath, {persistent: true, interval: watchMod.watchInterval}, watchMod.watch1)
fs.watchFile(watchMod.filePath, {persistent: true, interval: watchMod.watchInterval}, watchMod.watch2)


/*
* fs.unwatchFile 取消文件监听。传入第二个参数（listener回），则会取消具体的哪个回调函数，如果不传入第二个参数则会取消当前文件的全部监听
* 注意取消监听也要和监听处理在一起？？？？
* */

fs.unwatchFile(watchMod.filePath, watchMod.watch1)


