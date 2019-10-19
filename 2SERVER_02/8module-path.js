var path = require("path");

//Chuẩn hóa path
console.log("normalize" + path.normalize("/sst/ga//node//new/tab/.."));

console.log("join path:" + path.join("/sst", "ga", "node/new", "tab", ".."));
//Từ đường dẫn tương đối(file sau nằm cùng thư mục với file chạy js này), sang tuyệt đối(C:\user\nodejs)
console.log("resolve:" + path.resolve("path_example.js"));

console.log("ext name:" + path.extname("path_example.js"));