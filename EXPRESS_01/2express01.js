var express = require("express");

var app = express();

//http://localhost:8888/
app.get("/", function(req, res) {
  req.accepts("text/html");
//   var contentType = req.get("Content-Type");//Không có gì vì đâu có truyền gì đâu
//   res.send(contentType);
//   var param = req.param("name");//Đưa ra chuỗi thường asgdausgduiasgdiasgasd
//   res.send(param);
//   var param = req.query;//Đưa ra kiểu JSON:  {"name":"asgdausgduiasgdiasgasd"}
//   res.send(param);
  var param = req.protocol;//Đưa ra: http
  res.send(param);
});

var server = app.listen(8888, function(){
    console.log("Server is running..." + server.address().port);
});
