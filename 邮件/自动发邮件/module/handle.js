const nodemailer  = require("nodemailer")
const {default:Axios} = require("axios")
const {handlingMail} = require("./structure")
exports.head = function (value,emailQQ,codeQQ,response) {
  handlingMail(value,function (readResult) {
    // 发送邮件函数
    function getHoneyedWords() {
      return new Promise((res)=>{
        let result = readResult.data ||   "需要领取资料的同学可以加我好友"
        res(result)
      })
    };
    async function sendMail(text) {
      let user = `${emailQQ}@qq.com`;//自己的邮箱   开头授权码
      let pass = `${codeQQ}`; //qq邮箱授权码,如何获取授权码下面有讲
      let to =  `${readResult.tex}@qq.com`;//对方的邮箱
      let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 587,
        secure: false,
        auth: {
          user: user, // 用户账号           //不用写修改
          pass: pass, //授权码,通过QQ获取    //不用写修改
        },
      });
      let info = await transporter.sendMail({
        from: `你好<${user}>`, // sender address 发件人名称
        to: `777<${to}>`, // list of receivers
        subject: `${readResult.users}`, // Subject line    标题
        text: text, // plain text body
      });
      response.send("发送成功")
    };
    getHoneyedWords().then(res => {
      //发送邮件
      sendMail(res);
    });

    // wdzsjibfyqpygjbg
  })
};







  
   
