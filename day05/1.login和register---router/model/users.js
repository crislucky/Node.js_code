//该模块用于操作数据库的代码
    //1.引入mongoose
    let mongoose = require('mongoose');
    //2.引入schema(模式对象，通过Schema可以对集合进行约束)-----相当于请了一个保安
    let Schema = mongoose.Schema;
    //3.创建一个约束对象-----制定进入你豪宅的规则
    let usersSchema = new Schema({
        email:{
            type:String,
            required:true,//必须填写
            unique:true//唯一字段
        },
        user_name:{
            type:String,
            required:true,//必须填写
        },
        password:{
            type:Number,
            required:true,//必须填写
        },
        date:{
            type:Date,
            default:Date.now()
        },
        enbale_flag:{
            type:String,
            default: "Y"
        }

    });
    //4.创建一个模型对象-------告诉保安你的规则
   module.exports =  usersModel = mongoose.model('users',usersSchema);