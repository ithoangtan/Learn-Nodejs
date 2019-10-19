var fs = require("fs");
var data  = "";
//Create readable stream
var readerStream = fs.createReadStream("10input.txt");
//Create writeable stream
var writerStream = fs.createWriteStream("10output.txt");
//Pipe the read and write operations
//Read 10input.txt and write to 10output.txt
readerStream.pipe(writerStream);
console.log("Program Ended!");