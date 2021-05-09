let express = require('express');
//引入连接数据库模块
let db = require('./db/index');
//引入操作数据库的模型对象
let cityModel = require('./model/cities');
let app = express();

//数据库连接成功后再设置路由
(async ()=>{
    await db;
    //获取中国省份
    app.get('/getAllProvince',(request,response)=>{
        response.set('Access-Control-Allow-Origin','*');
        //在数据库中查找所有省份
        cityModel.find({level:1},{name:1,province:1,_id:0},(err,data)=>{
            if(!err){
                console.log(data);
                response.json({state:1,data});
            }else{
                console.log(err);
                response.json({state:0,err:'网络不稳定，请稍后重试'});
            }
        })
    })
    //获取中国某一省份下所有城市
    app.get('/getAllCitiesByProvince',(request,response)=>{
        response.set('Access-Control-Allow-Origin','*');
        let {province} = request.query;
        cityModel.find({level:2,province},{name:1,city:1,_id:0},(err,data)=>{
            if(!err){
                console.log(data);
                response.json({state:1,data});
            }else{
                console.log(err);
                response.json({state:0,err:'网络不稳定，请稍后重试'});
            }
        })
    })
//获取中国某一省份,某一城市下的所有区县
    app.get('/getAllCountiesByProvinceAndCity',(request,response)=>{
        response.set('Access-Control-Allow-Origin','*');
        let {province,city} = request.query;
        cityModel.find({level:3,province,city},{name:1,code:1,_id:0},(err,data)=>{
            if(!err){
                console.log(data);
                response.json({state:1,data});
            }else{
                console.log(err);
                response.json({state:0,err:'网络不稳定，请稍后重试'});
            }
        })
    })
})()


app.listen(3000,(err)=>{
    if(!err){
        console.log('服务器启动成功');
    }else{
        console.log(err);
    }
});

