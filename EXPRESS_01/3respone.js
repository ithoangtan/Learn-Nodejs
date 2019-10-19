var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.cookie("sample", "test res cookie");
  //res.send("this is sample");
  //Hoặc trả về một JSON thường áp dụng cho web API
//   res.json( {
//     name: "Hoang",
//     age: 23
//   });

    res.redirect("https://www.google.com");
    res.end();
});

var server = app.listen(8888, function() {
    console.log("Server is running...." + server.address().port);
});
