const crypto = require("crypto");

const secret = "abcdef";

const hash = crypto
  .createHash("sha256", secret)
  .update("HoangTan")
  .digest("hex");

  console.log(hash);