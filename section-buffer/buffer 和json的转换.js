let buf = new Buffer('你热爱编程');

let jsonStr = JSON.stringify(buf);

let json = JSON.parse(jsonStr);

console.log(jsonStr)
console.log(json)


let copyBuf = new Buffer(JSON.parse(jsonStr))


console.log(copyBuf.toString())
