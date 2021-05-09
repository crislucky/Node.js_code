/*
* 流式文件读取：
*   fs.createReadStream(path[, options])
*        --path：写入文件的位置（路径）
*           --options ：配置对象
*                 --flags：打开文件要进行的操作,默认值"r"
*                     "r" ：读取
*                 --mode：文件的操作权限，默认值是0o666
*                     0o111:文件可被执行的权限
*                     0o222：文件被写入的权限
*                     0o444：文件被读取的权限
*                 --encoding：编码，默认值是"utf-8"
*                 --fd:文件描述符（文件索引）,默认：null
*                 --autoClose:自动关闭，当文件写入完毕后，自动关闭流，默认：true
*                 --start:读取开始的位置，默认：0
*                 --end：结束的位置（一般不用），默认：Infinity
*                 --highWaterMark:每一次读取文件时候的大小，默认为 64 * 1024
* */

//引入fs模块
let fs = require('fs');
//创建一个可读流
let rs = fs.createReadStream(__dirname+'/1.jpg',{
    // start:1000,
    // highWaterMark:1024*1024
});
let ws = fs.createWriteStream('./2.jpg');

// 检测流的状态
rs.on('open',()=>{
    console.log('可读流打开了');
});
rs.on('close',()=>{
    console.log('可读流关闭了');
    ws.end();
});
ws.on('open',()=>{
    console.log('可写流打开了');
});
ws.on('close',()=>{
    console.log('可写流关闭了');
});

//读取数据，当给一个可读流绑定一个data事件时，会自动触发事件的读取
rs.on('data',(data)=>{
    // console.log(data.length);
    // 将读取后的数据写入可写流中
    ws.write(data);

});
