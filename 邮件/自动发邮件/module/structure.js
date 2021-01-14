// 处理数据结构
exports.structure =function (value) {
  let  result = [];
  for (let  key in  value){
      
      //qq号码长度  是数字
      if ( !( Boolean(Number(value[key].tex)) && value[key].tex.trim().toString().length <= 11  &&    value[key].tex.trim().toString().length >= 7)){
          continue
          //去除空格 和 空值
          if (!value[key].tex.trim() || !value[key].users.trim()){
              continue
          }
      }
      result.push(value[key])
  }
  return new  Promise((resolve, reject)=>{
      resolve(result)
  })
};
// 处理邮件是否发送
exports.handlingMail=function (value,callback) {
    value.forEach((item)=>{
        item.then(res=>{
            if (res){
                callback(res)
            }
        })
    })
};

