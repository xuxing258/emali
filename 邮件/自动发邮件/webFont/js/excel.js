let aForm = document.getElementsByClassName("input")[0]

aForm.onchange=function(event){
    console.log(this.files[0])
    // 传入数据
    readWorkbookFromLocalFile(this.files[0],readWorkbook)
};
// 读取本地excel文件
function readWorkbookFromLocalFile(file, callback) {
    let reader = new FileReader();
    reader.onload = function(e) {
        let data = e.target.result;
        let workbook = XLSX.read(data, {type: 'binary'});
        if(callback) callback(workbook);

    };
    reader.readAsBinaryString(file);
}
// 处理数据
function readWorkbook(workbook){
    let sheetNames = workbook.SheetNames; // 工作表名称集合
    let worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
    let csv = XLSX.utils.sheet_to_csv(worksheet);
    csv2table(csv);
}

// 将csv转换成简单的表格，会忽略单元格合并，在第一行和第一列追加类似excel的索引
function csv2table(csv) {
    let rows = csv.split('\n');
    rows.pop(); // 最后一行没用的
    let html="";
    let ap="";
    rows.forEach(function (row, idx) {
        let columns = row.split(',');
        columns.forEach(function (column,index) {
            if(index){
                html += '<p>' + column + '</p>';
                newArr.push(column)
            }else{
                ap +='<p>' + column + '</p>';
                newArr1.push(column)
            }
        });


    });
    aNickname.innerHTML=ap;
    aNumber.innerHTML=html
}

