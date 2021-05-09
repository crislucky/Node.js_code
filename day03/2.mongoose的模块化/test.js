//引入连接数据库模块
let myPromise = require('./db/index');
//引入模型对象
let studentsModel = require('./model/students');


!(async()=>{
    await myPromise;
    let result = studentsModel.create({
            stu_id:'20190624006',
            name:'眼花了撩乱了',
            age:100,
            sex:'女',
            hobby:['啦啦啦啦啦啦啦啦'],
            info:'哈哈哈哈哈哈哈哈哈哈哈哈'
    });
    console.log(await result);
    //
    // let result = studentsModel.findOne({name:'wade'});
    // console.log(await result);

})();