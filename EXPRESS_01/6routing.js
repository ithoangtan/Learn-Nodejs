var express = require("express");
var app = express();

app.get("/", function(req, res) {
  console.log("home page");
  res.send("home page");
});
app.post("/", function(req, res) {
  console.log("home page post");
  res.send("home page post");
});
app.get("/enroll_student", function(req, res) {
  console.log("got a request enroll student");
  res.send("got a request enroll student");
});
app.delete("/del_student", function(req, res) {
  console.log("delete student page");
  res.send("delete student page");
});
//abcd, abxcd, abakjshdkajsdhcd
app.get("/ab*cd", function(req, res) {
  console.log("page ab*cd");
  res.send("page ab*cd");
});

var server = app.listen(8888, function() {
  console.log("Server running....." + server.address().port);
});
