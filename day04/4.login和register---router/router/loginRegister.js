/*
* 登录与注册路由器-----业务路由器
* */
//引入express模块
let express = require('express');
//引入路由器,express身上有一个方法router,router是一个函数
let {Router} = express;
//实例化一个路由器
let router = new Router();
// //引入模型对象
let usersModel = require('../model/users');


//设置路由----业务路由-----用户注册的路由
router.post('/register',async(request,response)=>{
    //1.获取用户输入
    let {email,user_name,password,re_password} = request.body;

    //2.校验格式
    let emailReg = /^[a-zA-Z0-9_]{5,16}@[A-Za-z0-9]{2,8}\.com$/;
    let userNameReg = /^[A-Za-z0-9]{5,16}$/;
    let passwordReg = /^[A-Za-z0-9_@#$]{5,16}$/;
    //用正则test()方法测试
    if(!emailReg.test(email)){
        response.send('请输入正确的邮箱');
        return;
    }else if(!userNameReg.test(user_name)){
        response.send('请输入正确的密码或姓名');
        return;
    }else if(!passwordReg.test(password)){
        response.send('请输入正确的密码或者姓名');
        return;
    }else if(password !== re_password){
        response.send('两次输入密码不一致');
    }
    console.log('模拟查询');

    try{
        //3.去数据库查找该数据库是否注册过

        let findResult = await usersModel.findOne({email});
        if(findResult){
            response.send(`${email}邮箱和别人重复，请重新输入`);
        }else{
            await usersModel.create({email,user_name,password});
            response.redirect('http://www.baidu.com');
            console.log(`邮箱为：${email}，姓名为：${user_name}的用户注册成功！${Date.now()}`)
        }
    }
    catch(err){
        //技术数作，一些安全性的操作写在此处
        console.log(err);
        response.send('当前网络不稳定，请稍后重试！');
    }

});
//设置路由----业务路由----用户登录的路由
router.post('/login',async(request,response)=>{
    //1.获取用户输入
    let {email,password} = request.body;

    //2.校验格式
    let emailReg = /^[a-zA-Z0-9_]{5,16}@[A-Za-z0-9]{2,8}\.com$/;
    let passwordReg = /^[A-Za-z0-9_@#$]{5,16}$/;
    //3.用正则test()方法校验
    if(!emailReg.test(email)){
        response.send('请输入正确的邮箱');
        return;
    }else if(!passwordReg.test(password)){
        response.send('请输入正确的密码或者姓名');
        return;
    }
    console.log('模拟查询');

    //可里面放能出错的代码
    try{
        //3.去数据库查找该数据库是否有该邮箱

        let findResult = await usersModel.findOne({email,password});
        if(findResult){
            console.log(`邮箱${email}登录成功`);
            response.redirect('https://www.baidu.com')
        }else{
            //登录失败，真实项目中一些安全性的操作写在此处
            console.log(`邮箱${email}登录失败`);
            response.send(`${email}邮箱名和密码不一致，请重新输入`);
        }
    }
    catch(err){

    }
});

module.exports = router;
