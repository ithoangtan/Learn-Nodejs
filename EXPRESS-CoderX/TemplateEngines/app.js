const express = require("express");

var app = express();

var port = 8888;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("./index", {
    name: "ithoangtan"
  });
});

app.get("/users", function(req, res) {
  res.render("./users", {
    users: [{ id: 1, name: "ithoangtan" }, { id: 2, name: "it1006" }]
  });
});

app.listen(port, function() {
  console.log("Server running.... port" + port);
});
