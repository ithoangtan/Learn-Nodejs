var fs = require("fs");
var http = require("http");

debugger;
http
  .createServer(function(req, res) {

    //read File
    fs.readFile("./ot-index.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8888);

//CreateFile: appendFile(), open(), writeFile()
fs.appendFile("myFile1.txt", "Append File", function(err) {
  if (err) throw err;
  console.log("saved");
});

fs.open("myFile2.txt","w", function(err, file) {//open ra
  if (err) throw err;
  console.log("saved"); //trả về một stream
  console.log("as: " + file);
});

fs.writeFile("myFile3.txt", "Context MENU", function(err) {//Nếu có tồn tại rồi thì nó sẽ ghi lại từ đầu
  if (err) throw err;
  console.log("saved");
});

fs.appendFile("myFile3.txt", "Context MENU append", function(err) {//Ghi đè luôn
  if (err) throw err;
  console.log("saved");
});

fs.unlink("myFile4.txt", function(err) {//Xóa file
  if(err) throw err;
  console.log("File renamed");
});