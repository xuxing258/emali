
exports.crateSearch = async function(MyModel,value) {
    // 查询结果
    let result = await  MyModel.find({ user: value.tex.trim() }) ;
    if( !(result == ![]) ) {      // 查找到数据 不写入数据
        return false
    }else{           // 没有查找到数据  写入数据
         MyModel.create({
             user: value.tex.trim(),
             name: `${value.users}`
         });
         return new Promise((resolve)=>{
             resolve(value)
         })
    }
};