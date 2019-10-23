var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = 8000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static("public"));

var usersRoute = require("./routes/users.route");

app.get("/", function(req, res) {
  res.render("index", {
    name: "AAA"
  });
});

app.use("/users", usersRoute);

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
