require("dotenv").config();

console.log(process.env.SESSION_SECRET);

var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var userRoute = require("./routes/users.route");
var authRoute = require("./routes/auth.route");

var authMiddleware = require("./middlewares/auth.middleware");

var port = 8000;

var app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser("qwertyuiopasdfghjklzxcvbnm1234567890"));
//Truyền vào một cái secret

app.use(express.static("public"));

// Routes
app.get("/", function(req, res) {
  res.render("index", {
    name: "AAA"
  });
});

app.use("/users", authMiddleware.requireAuth, userRoute);
app.use("/auth", authRoute);

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
