let aError = document.querySelector("#box .error-q"),
    aText = document.querySelector(".text"),
    aButton = document.querySelectorAll(".sgin button"),
    aLi = document.querySelectorAll(".add li"),
    aInput = document.querySelectorAll(".mailbox p input"),
    aNumber = document.getElementsByClassName("flex-number")[0],
    aNumberInput = [...aNumber.children]  ,
    aNickname = document.getElementsByClassName("flex-Nickname")[0],
    aNicknameInput = [...aNickname.children]  ;
let arr = {};
let newArr = [];
let newArr1 = [];


//  插入行数
aLi[3].onclick=function(){
    if(!(aLi[1].innerText))return;
    let num =  Number(aLi[1].innerText);
    let dom,dom1;
    for (let index = 0; index < num; index++) {
        dom = document.createElement("input")
        dom1 = document.createElement("input")
        aNumber.appendChild(dom1)
        aNickname.appendChild(dom)
    }
};
//  清空
aLi[4].onclick=function(){
    let dom ="",dom1="";
    for (let index = 0; index <= 4; index++) {
        dom += "<input type='text'></input>"
        dom1 += "<input type='text'></input>"
    }
    aNumber.innerHTML =  dom
    aNickname.innerHTML =  dom
};

//  发送数据
aButton[0].addEventListener("click",()=>{
    //重新获取节点
    aNumber = document.getElementsByClassName("flex-number")[0]
    aNumberInput = [...aNumber.children];
    aNickname = document.getElementsByClassName("flex-Nickname")[0]
    aNicknameInput = [...aNickname.children];
    aNumberInput.forEach((item,index) => {
        arr[index]={};
        arr[index]["tex"] = item.value ||  item.innerText
    });
    aNicknameInput.forEach((items,index)=>{
        arr[index]["users"] = items.value  || items.innerText
    });
    arr[0]["data"]= aText.value.trim();
    arr[0]["emailQQ"]= aInput[0].value.trim();
    arr[0]["codeQQ"]= aInput[1].value.trim();
    if(arr[0]["data"] == "发送内容"){
        aError.innerText = "未填写发送内容";
        return
    }
    console.log(arr);
    Ajax()
    console.log(arr)
})

function Ajax(){
    $.ajax({
        url:"http://localhost:3000/xuxin",
        type:"get",
        data:arr,
        success(res){
            aError.innerHTML += res
        }
    })
}


