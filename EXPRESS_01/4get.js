var express = require("express");

var app = express();

app.get("/process_get", function(req, res) {
    req.setEncoding("UTF-8");//Chắc chắc dữ liệu vào là đúng UTF-8
    var response = {
        firstName : req.query.firstName,
        lastName : req.query.lastName,
    };
    console.log(response);
    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
        //Có cái này mới hiện tiếng Việt được khi in ra được
    res.end(JSON.stringify(response));
});

var server = app.listen(8888, function() {
    console.log("Server is running...." + server.address().port);
});
