let express = require('express');
let app = express();
//使用中间件获取post请求的请求体
app.use(express.urlencoded({extended:true}));
app.disable('x-powered-by');
app.get('/testGET',(request,response)=>{
    response.set('Access-Control-Allow-Origin',"http://localhost:63342");
    response.send('我是服务器返回的get请求响应')
});


app.listen(3000,(err)=>{
    if(!err){
        console.log('测试cors解决跨域');
    }else{
        console.log(err);
    }
})