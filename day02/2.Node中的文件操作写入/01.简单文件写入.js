
/*   简单文件写入：
*       fs.writeFile(file, data[, options], callback)
*           --file : 写入文件的路径+文件名
*           --data ：写入的数据
*           --options ：配置对象（可选参数，不常用）
*                 --flag：打开文件要进行的操作,默认值"w"
*                     "w" : 写入
*                     "a" ：追加
*                 --mode：文件的操作权限，默认值是0o666(读写权限都有)
*                     0o111: 文件可被执行的权限
*                     0o222：文件被写入的权限
*                     0o444：文件被读取的权限
*                 --encoding：编码，默认值是："utf8"
*           --callback：回调函数
*
*   在Node中有一个设计理念：错误优先
*
*   对于简单文件写入：一次性将所有要写入的内容，全部加载到内存当中。所以一些小文件推荐使用这种方式。
*
* */

//引入fs模块
let fs = require('fs');
fs.writeFile('./demo.txt','文件不可写入哇哇哇哇',{
    flag:'a',
    mode:0o444
},(err)=>{
    if(!err){
        console.log('文件写入成功');
    }else{
        console.log(err);
    }
});
