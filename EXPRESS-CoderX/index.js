require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var userRoute = require("./routes/users.route");
var authRoute = require("./routes/auth.route");
var productRoute = require("./routes/product.route");
var cartRoute = require("./routes/cart.route");

var authMiddleware = require("./middlewares/auth.middleware");
var sessionMiddleWare = require("./middlewares/session.middleware");

var port = 8000;

var app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleWare); //Middileware chạy trên tất cả đường dẫn

app.use(express.static("public"));

// Routes
app.get("/", function(req, res) {
  res.render("index", {
    name: "AAA"
  });
});

app.use("/users", authMiddleware.requireAuth, userRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
