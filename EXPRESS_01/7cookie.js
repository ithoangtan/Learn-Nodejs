var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser());

app.get("/cookies", function(req, res) {
  res.cookie("cookieName", "valueString").send("Cookie is set");
});

app.get("/", function(req, res) {
  //console.log("Cookie:", req.cookies);//Truyền bao nhiêu tham số cũng được
  console.log(req.cookies);//Truyền bao nhiêu tham số cũng được
  res.send(req.cookies);
});

var server = app.listen(8888, function() {
    console.log("Server running....." + server.address().port);
  });
  