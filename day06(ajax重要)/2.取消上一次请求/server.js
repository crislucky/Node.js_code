let express = require('express');
let app = express();
app.use(express.static('public'));
//使用中间件获取post请求的请求体
app.use(express.urlencoded({extended:true}));
app.disable('x-powered-by');
app.get('/getAuthCode',(request,response)=>{
    // console.log(request.query);
   setTimeout(function(){
       let authCode = Math.floor(Math.random()*8999+1000);
       //如果返回的是数字，他就会认为是http的状态码，应该把数字变成字符串
       console.log(authCode);
       response.send(authCode.toString())
   },2000);
});



app.listen(3000,(err)=>{
    if(!err){
        console.log('测试原生js发送ajax_get请求：http://localhost:3000/getAuthcode.html');
    }else{
        console.log(err);
    }
})