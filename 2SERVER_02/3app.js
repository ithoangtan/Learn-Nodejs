var logger = require("./2logger");
var server = require("http");
debugger;
server.createServer(function(req, res) {
  if (req.url == "/tinhTong") {
      logger.error("hahaTinhTong");
    res.end();
  } else if (req.url == "/gioiThieu") {
    logger.warning("I im giới thiệu haha");
    res.end();
  } else if(req.url == "/") {
    //res.send("<font color = red>Hello Express</font>");
    logger.info("/");
    res.end();
  }
}).listen(8888); //tạo server từ app này
