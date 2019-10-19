var fs = require("fs");
var data  = "";
//Create readable stream
var readerStream = fs.createReadStream("10input.txt");
//Set encoding
readerStream.setEncoding("UTF-8");
//handle stream event --> data, end and error

readerStream.on("data", function(chunk){
    data+= chunk;
});
readerStream.on("end", function(){
    console.log(data);
});
readerStream.on("error", function(err){
    console.log(err.stack);
});
console.log("Finish Ended!!!");