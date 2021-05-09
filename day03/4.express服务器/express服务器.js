//引入express模块(库)
let express = require('express');

//创建app应用对象--------相当于例子中的服务员
let app = express();

//设置路由------后端路由   对请求的网址进行分类处理

//设置GET请求
app.get('/',(request,response)=>{
        // request.query获取GET请求的查询字符串参数
        console.log(request.query);

        // 用户通过浏览器输入网址请求页面的方式是GET请求
        response.send('客观你好，我是主页面');
});

app.get('/meishi',(request,response)=>{
        console.log(request.query);
        // 用户通过浏览器输入网址请求页面的方式是GET请求
        response.send('客观你好，我是美食页面，有很多好吃的哦');
});

//设置post请求
app.post('/demo/test',(request,response)=>{
    //post请求过来的参数，不可以通过request.query获取，要通过一个新的属性，而且需要借助一个中间件完成
    // console.log(request.query);
    response.send('服务器给浏览器回应了');
});

//绑定监听
app.listen(3000,(err)=>{
    if(!err){
        console.log('服务器连接成功');
    }else{
        console.log(err);
    }
});
