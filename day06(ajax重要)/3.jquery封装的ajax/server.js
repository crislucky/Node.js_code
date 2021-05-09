let express = require('express');
let app = express();
app.use(express.static('public'));
//使用中间件获取post请求的请求体
app.use(express.urlencoded({extended:true}));
app.disable('x-powered-by');
app.get('/testGET',(request,response)=>{
    console.log(request.query);
    response.send('我是服务器返回的GET请求的信息111')
});

app.post('/testPOST',(request,response)=>{
    // console.log(request.query);
    console.log(request.body);
    response.send('我是服务器返回的POST请求的信息')
});

app.listen(3000,(err)=>{
    if(!err){
        console.log('测试jquery发送ajax请求：http://localhost:3000/jquery_ajax.html');
    }else{
        console.log(err);
    }
})