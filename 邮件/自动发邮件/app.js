const express = require("express");
const app = express();
const {DataNum} =require("./contorlles/contorlles");
const {readMongo} = require("./module/readfile")
const mongoose = require('mongoose');

app.get("/xuxin",DataNum);
app.get("/",function(req,response){
    response.send("66")
});

// 查找数据库
mongoose.connect('mongodb://localhost:27017/xuxin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    //连接数据库成功 才能开启服务器
    app.listen(3000,function () {
        console.log("300端口开启");
    });
}).catch((error)=>{
    console.log("数据库连接失败")
});
