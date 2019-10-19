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

app.get("/hello", function(req, res) {
  var firstName = req.query.firstName + "  ";
  var lastName = req.query.lastName;
  res.send("<h1>Hello " + (firstName + lastName) + "</h1>");
});
