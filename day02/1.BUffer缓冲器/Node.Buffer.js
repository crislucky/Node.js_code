//将一个人字符串存入到Buffer中
// let str = 'hello!wrold';
// let buf = new Buffer(str);
// console.log(buf);

//创建一个Buffer实例--即将被废弃（效率低）
// let buf = new Buffer(10);
// console.log(buf);

//创建一个Buffer实例--效率叫上面稍高
// let buf = Buffer.alloc(5);
// // console.log(buf);

//创建一个Buffer实例--效率高，但不安全,可能包含旧数据，需要重写所有数据
let buf = Buffer.allocUnsafe(7);
console.log(buf);
console.log(buf.length);


