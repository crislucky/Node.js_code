let express = require('express');
let app = express();
//使用中间件获取post请求的请求体
app.use(express.urlencoded({extended:true}));
app.disable('x-powered-by');
app.get('/testGET',(request,response)=>{

    // let data = 'atguigu';
    // response.send("demo("+ "'"+data+"'" +")");
    let {callback} = request.query;
    let person = [{name:'kobe',age:18},{name:'wade',age:19}];
    console.log(JSON.stringify(person));//[{"name":"kobe","age":18},{"name":"wade","age":19}]
    // console.log(typeof(JSON.stringify(person )));//string

    // response.send(`${callback}(${JSON.stringify(person)})`);
    // response.send(`${callback}(${person})`);
    // console.log(person);//[{name:'kobe',age:18},{name:'wade',age:19}]
    // console.log('person');//person
    // console.log(`${person}`);
    console.log(`${JSON.stringify(person)}`);



});


app.listen(3000,(err)=>{
    if(!err){
        console.log('测试jsonp解决跨域');
    }else{
        console.log(err);
    }
})