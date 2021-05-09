/*
* 说明：
*   mongoDB:一个非关系型数据库的名字
*   mongod:启动数据库服务命令
*   mongo:连接数据库命令
*   mongoose:用于在Node环境下连接数据库的框架(很流行)
* */
//引入mongoose,在Node环境下来链接数据库的框架（第三方模块）
let mongoose = require('mongoose');


//操作数据库
//创建一个promise实例对象
let myPromise = new Promise((resolve,reject)=>{
    //2.连接数据库
    mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true });

    //3.绑定监听
    mongoose.connection.once('open',(err)=>{
        if(!err){
            console.log('数据库连接成功');
            //4.数据库链接成功后再操作数据库
           let data =  resolve('数据库链接成功后再操作数据库');
            // let data = reject('失败了')
        }else{
            console.log(err);
        }
    });

});
//第一种写法
// myPromise
//     .then((data)=>{
//         console.log(data);
//         //成功之后，才能执行下一步
//         console.log('操作数据库的代码');
//     },(data)=>{
//         console.log(data);
//         console.log('失败的回调');
//     });


//第二种写法
myPromise
    .then((data)=>{
        console.log(data);
    //成功之后，才能执行下一步
    console.log('操作数据库的代码');

    })
    .catch((data)=>{
        console.log(data);
        console.log('失败的回调')

    });


//第三种写法,promise和async结合
// async function demo(){
//     let result = await myPromise;
//     console.log(result);
//     //成功之后，才能执行下一步
//     console.log('操作数据库的代码');
// }
// demo();


//第四种写法 IIFE
// ;(async()=>{
//     let result = await myPromise;
//     console.log(result);
//     //成功之后，才能执行下一步
//     console.log('操作数据库的代码');
// })();