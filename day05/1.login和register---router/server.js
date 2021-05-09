//引入express模块
let express = require('express');
//引入数据库模块
let db = require('./db/index');
//引入业务路由
let loginRegister = require('./router/loginRegister');
//引入UI路由
let UIRouter = require('./router/UIRouter');

//创建app应用对象
let app = express();
//设置端口号
const PORT = 3000;

//使用中间件解析post请求的请求体
app.use(express.urlencoded({extended:true}));

//暴露静态资源
app.use(express.static('public'));

    //数据库连接成功之后再设置路由等一系列操作
    db
        .then(()=>{
            //使用登录-注册业务路由
            app.use(loginRegister);
            //使用UI路由
            app.use(UIRouter);
        })
        .catch(()=>{
})


//设置监听
app.listen(PORT,(err)=>{
    if(!err){
        console.log(`服务器启动成功，端口号为${PORT}`);
    }else{
        console.log(err);
    }
});