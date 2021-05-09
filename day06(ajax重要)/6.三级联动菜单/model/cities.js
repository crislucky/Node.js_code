//该模块用于操作数据库的代码
    //1.引入mongoose
    let mongoose = require('mongoose');
    //2.引入schema(模式对象，通过Schema可以对集合进行约束)-----相当于请了一个保安
    let Schema = mongoose.Schema;
    //3.创建一个约束对象-----制定进入你豪宅的规则
    let citySchema = new Schema({
        code:String,
        province:String,
        city:String,
        county:String,
        name:String,
        level:Number
    });
    //4.创建一个模型对象-------告诉保安你的规则
   module.exports = mongoose.model('cities',citySchema);