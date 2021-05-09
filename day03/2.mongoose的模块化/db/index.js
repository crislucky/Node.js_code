/*
该模块用于引入数据库
* */
//引入mongoose,在Node环境下来链接数据库的框架（第三方模块）
let mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);

const PORT = 27017;//数据库的端口号
const DN_NAME = 'test';

//操作数据库
//创建一个promise实例对象
module.exports = new Promise((resolve,reject)=>{
    //2.连接数据库
    mongoose.connect(`mongodb://localhost:${PORT}/${DN_NAME}`,{ useNewUrlParser: true });

    //3.绑定监听
    mongoose.connection.once('open',(err)=>{
        if(!err){
            console.log('数据库连接成功');
            resolve();
        }else{
            reject(err);
        }
    });

});