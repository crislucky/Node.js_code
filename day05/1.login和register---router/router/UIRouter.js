/*
* UI路由器------登录与注册界面
* */
//引入express模块
let express = require('express');
//引入路由器,express身上有一个方法router,router是一个函数
let {Router} = express;
//实例化一个路由器
let router = new Router();
//引入path模块,path身上有一个resolve()方法
let {resolve} = require('path');



//UI路由  从浏览器输入网址跳到注册界面
router.get('/register',(request,response)=>{
    let url = resolve(__dirname,'../public/register.html');
    response.sendFile(url);
})

//UI路由  从浏览器输入网址跳到登录界面
router.get('/login',(request,response)=>{
    let url = resolve(__dirname,'../public/login.html');
    response.sendFile(url);
})
module.exports = router;