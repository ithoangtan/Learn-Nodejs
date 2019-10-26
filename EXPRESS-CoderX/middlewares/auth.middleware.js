var db = require("../db");

module.exports.requireAuth = function(req, res, next) {
  //Vì   res.cookie("userId", user.id, { signed: true });
  // nên ta muốn lấy Cookies thì phải là signedCookies
  if (!req.signedCookies.userId) {
    res.redirect("/auth/login");
    return;
  }

  var user = db
    .get("users")
    .find({ id: req.signedCookies.userId })
    .value();

  if (!user) {
    res.redirect("/auth/login");
    return;
  }

  // Để ta sẽ truyền bằng middleware,
  //để tránh phải truyền user cho mọi render của các controller
  res.locals.user = user;

  next();
};
