var express = require("express");
var bodyParser = require("body-parser"); //Cần có cái này để xài POST

var app = express();

var urlEncodeParser = bodyParser.urlencoded({extended:false});

app.post("/process_post", urlEncodeParser, function(req, res) {
  req.setEncoding("UTF-8"); //Chắc chắc dữ liệu vào là đúng UTF-8
  var response = {
    firstName: req.body.firstName,
    lastName: req.body.lastName
  };
  console.log(response);
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  //Có cái này mới hiện tiếng Việt được khi in ra được
  res.end(JSON.stringify(response));
});

var server = app.listen(8888, function() {
  console.log("Server is running...." + server.address().port);
});
