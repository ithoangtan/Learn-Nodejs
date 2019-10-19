var fs = require("fs");
var data = "A Solution of all Technology";
//Create writeable stream
var writerStream = fs.createWriteStream("10output.txt");
//Write data to stream with encoding to be UTF-8
writerStream.write(data, "UTF-8");
//Mark the end of file
writerStream.end();
//Handle stream event --> finish and error
writerStream.on("finish", function() {
  console.log("write complete!");
});
writerStream.on("error", function(err) {
  console.log(err.stack);
});
console.log("Program Ended!!!");
