var fs = require("fs");
//Thực hiện tuần tự xong mới tới lệnh tiếp
debugger;
// var data = fs.readFileSync("myFile1.txt");
// console.log(data.toString());
// console.log("Program ended Sync");

fs.readFile("myFile1.txt", function(err, data) {
    if (err) throw err;
    console.log(data.toString());
});
console.log("Program ended");//Sau khi thực hiện xong mới callback lại 