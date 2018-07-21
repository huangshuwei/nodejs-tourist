
let str = '你喜爱编程'

let tostringWrite = new Buffer(str);

console.log(str.length)
console.log(tostringWrite.length)

console.log(tostringWrite)
console.log(tostringWrite.toString())


tostringWrite.write('热',3,3,'utf8');

console.log(tostringWrite.toString())