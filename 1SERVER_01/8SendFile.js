var fs = require("fs"); //Module hỗ trợ đọc 1 file lên server cũng như là đọc nội dung 

var noiDung = fs.readFileSync( __dirname + "/8List.txt");

console.log(noiDung);

console.log(noiDung.toString());
