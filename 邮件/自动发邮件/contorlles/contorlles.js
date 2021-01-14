const {head} = require("../module/handle")
const {readfile} = require("../module/readfile")
const {structure} = require("../module/structure")


// 控制数据
exports.DataNum=async function(request,response){
  response.header("Access-Control-Allow-Origin","*")
  response.header("Content-Type", "application/json;charset=utf-8");
  const result = request.query;
 
  //处理数据
  let  know  =  await structure(result);
  // 查找数据
  let lookupResult = await readfile(know);
  // 发送邮件
  head(lookupResult,result[0].emailQQ,result[0].codeQQ,response);
};
