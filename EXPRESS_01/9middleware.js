var express = require("express");

var app = new express();

//Muốn khi nào vào trang nào phải log ra thì đòi hỏi phải can thiệp
//Cần middleware
app.use(function(req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
});
//Nếu có một middleware phía sau thì nó phải chạy xong mới đến app.get()....

app.get("/", function(req, res) {
  res.send("Welcome to HoangTan");
});

app.get("/help", function(req, res) {
  res.send("How i can help you?");
});

var server = app.listen(8888, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App is running at http://%s:%s", host, port);
});
