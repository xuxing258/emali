const  MyModel = require("./mongod")
const {crateSearch} = require("./createSearch")

// 数据库模板
exports.readfile = async function (value) {
    //查找数据
    let  result = value.map((item)=>{
      return  crateSearch(MyModel,item)
    });
    return result
};
