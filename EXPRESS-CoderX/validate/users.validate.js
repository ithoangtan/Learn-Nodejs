module.exports.postCreate = function(req, res, next) {
  //Ta có thể lưu các biến với locals để chuyển qua lại các middleware
  //ví dụ biến succes = true
  res.locals.success = true;
  
  var errors = [];

  if (!req.body.name) {
    errors.push("Name is required.");
  }

  if (!req.body.phone) {
    errors.push("Phone is required");
  }

  if (errors.length) {
    res.render("users/create", {
      errors: errors,
      values: req.body
    });
    return;
  }

  next();
};