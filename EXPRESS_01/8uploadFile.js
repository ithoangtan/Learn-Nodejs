var express = require("express");

var multer = require("multer");//middleware cóe tên multer

var app = new express();

var storage = multer.diskStorage({//Khởi tạo đối tượng storage để lưu trữ file ở đâu, file gì
  destination: function(req, file, callback) {//tham số thứ nhất
    callback(null, "./8uploads");//Nhớ là thư mục đẫ tồn tại không là lỗi
  },
  filename: function(req, file, callback) {//tham số thứ 2
    callback(null, file.originalname);
  }
});

var upload = multer({ storage: storage }).single("myFile");//Bao bọc storage đó, lấy cái file đầu tiên, suy nhất

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/8ot-index.html");
});

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.end("Error upload file");
    }
    return res.end("File is upload successfully!");
  });
});

var server = app.listen(8888, function() {
    console.log("Server running....." + server.address().port);
  });
  