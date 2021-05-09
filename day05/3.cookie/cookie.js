//使用express构建服务器

//引入express
let express = require('express');
// 创建app应用对象
let app = express();
//引入第三方库cookie-parser解析器
let cookieParser = require('cookie-parser');
//必得用一下cookie-parser第三方库才行
app.use(cookieParser());


//设置路由  test路由：1.给客服端中下一个cookie
app.get('/test',(request,response)=>{
    // 再express中，设置cookie无需任何内置库和第三方库，直接引入即可

    //1.在服务端给客服端种下一个会话cookie
    // response.cookie('demo',123);
    //2.在服务端给客服端种下一个持久化cookie
    response.cookie('demo',123,{maxAge:1000*30});
    response.send('OK');
});

app.get('/test2',(request,response)=>{
    //在express中，如果想获取cookie,需要用到一个第三方库，cookie-parser
    //获取客户端携带过来的cookie
    console.log(request.cookies);
    response.send('true');

});
app.get('/test3',(request,response)=>{
    //告诉客服端删除一个cookie

    //删除方法一  立即过期
    // response.cookie('demo',123,{maxAge:0});

    //删除方法二  调用删除的API
    response.clearCookie('demo');

    response.send('OKOK');

});

//绑定监听
app.listen(3000,(err)=>{
    if(!err) console.log('服务器启动成功');
    else console.log(err);
});

