var express = require("express");
var app = express(); //gọi biến app là express module mới cài

var server = require("http").createServer(app); //tạo server từ app này

server.listen(8888); //lắng nghe ở 8888

app.get("/", function(req, res) {
  //res.send("<font color = red>Hello Express</font>");
  res.sendFile(__dirname + "/1ot-index.html");
});

app.get("/gioiThieu", function(req, res) {
  res.send("I im giới thiệu haha");
});

app.get("/tinhTong/:so1/:so2", function(req, res) {
  var so1 = req.params.so1;
  so1 = parseInt(so1);
  var so2 = req.params.so2;
  so2 = parseInt(so2);
  res.send("<h1>Result: " + (so1 + so2) + "</h1>");
});
