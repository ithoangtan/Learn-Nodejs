var express = require("express");
var app = new express();

app.set("view engine", "pug");
//Mặc định view nằm cùng thư mục với file js này
//Nên ta phải làm lại
app.set("views", "./10view/"); //Set đường dẫn mà phải có xẹc phía cuối

app.use(function(req, res, next) {
  console.log("%s %s", req.method, req.url);
  next();
});
app.get("/", function(req, res) {
  res.render("view.pug", { title: "hello", message: "You are welcome" });
});

var server = app.listen(8888, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App is running at http://%s:%s", host, port);
});
