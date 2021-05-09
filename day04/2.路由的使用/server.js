//引入express模块
let express = require('express');

//创建app应用对象
let app = express();
// app.use(express.urlencoded(extended = true));

//设置路由-------根路由
app.get('/',(request,response)=>{
    /*
        request对象上的方法：
            request.query	获取get请求查询字符串的参数，拿到的是一个对象
            request.params	获取get请求参数路由的参数，拿到的是一个对象
            request.body	获取post请求体，拿到的是一个对象（要借助一个中间件）-----暂时放一放
            request.get(xxxx)	获取请求头中指定key对应的value

         response对象上的方法：
            response.send()	给浏览器做出一个响应
            response.end()	给浏览器做出一个响应（不会自动追加响应头）
            response.download()	告诉浏览器下载一个文件(相对路径)
            response.sendFile()	给浏览器发送一个文件（绝对路径）
            response.redirect()	重定向到一个新的地址（url）
            response.set(header,value)	自定义响应头内容
            response.get()	获取响应头指定key对应的value
            res.status(code)	设置响应状态码
     */
    // console.log(request.query);
    // console.log(request.params.id);
    // console.log(request.body);
    // console.log(request.get('host'));
    // response.download('./public/demo.html');//有问题
    // response.sendFile(__dirname+'/public/1.jpg');
    // response.redirect('http://www.baidu.com');
    // response.set('demo',123)
    // console.log(response.get('demo'));
    response.get('Date');
    // response.status(600)


    response.send('设置路由-----------根路由');
});

//设置路由---一级路由
app.get('/meishi',(request,response)=>{
    response.send('设置路由-----------一级路由');
});

//设置路由---二级路由
app.get('/meishi/huoguo',(request,response)=>{
    response.send('设置路由-----------二级路由');
});

//绑定监听
app.listen(3000,(err)=>{
    if(!err){
        console.log('服务器启动成功')
    }else{
        console.log(err);
    }
});