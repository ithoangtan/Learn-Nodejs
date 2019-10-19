var http = require("http"); //require module http

http.createServer(function  (req, res){
    res.writeHead(200, {"Content-Type":"text/plain"});//200 là mã truyền cho khách hàng(nghĩ là có file gì đó), 
    //Và kiểu dữ liệu trả về là gì
    res.end("HoangTan.vn");//Kết thúc bằng chuỗi HoangTan.vn
}).listen(8888);//lắng nghe từ port 8888. ai truy cập thì trả về nội dung trên" HoangTan.vn"