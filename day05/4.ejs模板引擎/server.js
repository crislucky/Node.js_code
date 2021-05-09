//1.引入express模块
let express = require('express');
//2.创建app应用对象-------相当于例子中的服务员
let app = express();
//配置渲染引擎
app.set('view engine','ejs');
//配置模板文件夹
app.set('views','./views');

//3.设置路由 ------- 后端路由   对请求的网址(URL)进行一个分类处理
app.get('/',(request,response)=>{
    //用ejs渲染一个页面
    const personName = '张三';
    response.render('index',{name:personName});


})
//4.绑定端口监听
app.listen(3000,(err)=>{
    if(!err) console.log('服务器启动成功')
    else console.log(err)
})