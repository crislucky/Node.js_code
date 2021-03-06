/*
* 流式文件写入：
*   特点：以流的形式操作文件，不再是将文件一次性的装载到内存中了，效率高，减少服务器的压力。
*   fs.createWriteStream(path[, options])
*        --path：写入文件的位置（路径）
*           --options ：配置对象
*                 --flags：打开文件要进行的操作,默认值"w"
*                     "w" : 写入
*                     "a" ：追加
*                 --mode：文件的操作权限，默认值是0o666
*                     0o111:文件可被执行的权限
*                     0o222：文件被写入的权限
*                     0o444：文件被读取的权限
*                 --encoding：编码，默认值是"utf-8"
*                 --fd:文件描述符（文件索引）,默认：null
*                 --autoClose:自动关闭，当文件写入完毕的时候（水管里没有水了），自动关闭已经打开的文件，默认：true
*                 --start:写入开始的位置，默认：0
* */

//引入fs模块
let fs = require('fs');
//流式文件写入
//先创建一个可写流
let ws = fs.createWriteStream('./test.txt');
//检测流的状态
ws.on('open',()=>{
    console.log('可写流打开了');
});
ws.on('close',()=>{
    console.log('可写流关闭了');
});

//写入数据
ws.write('加油\n');
ws.write('fight');
//每次写完数据记得关闭可写流，close()或者end();因为可写流不关，会占内存，很可能会导致内存溢出
ws.close();//ws.end()
