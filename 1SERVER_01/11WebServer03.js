var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type":"application/json"});
    var objExample = {
        ho: "Hoang",
        ten: "Tan",
        namSinh: 1996
    };
    res.end(JSON.stringify(objExample));
}).listen(8888);
