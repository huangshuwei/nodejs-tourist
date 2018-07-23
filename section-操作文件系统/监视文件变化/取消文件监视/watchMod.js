module.exports = {
    watchInterval:3*1000,
    filePath:'../../../test/监视文件变化/test.txt',
    watch1: function (curr, prev) {
        console.log('test.txt watch1')
    },
    watch2: function (curr, prev) {
        console.log('test.txt watch2')
    }
}