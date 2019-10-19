var fs = require("fs");
var zlib = require("zlib");

//Compress the file input.txt to input.txt.gz
fs.createReadStream("10input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("10input.txt.gz"));
console.log("Complete compressed!!!");

// //Decompress the input.txt to input.txt.gz
// fs.createReadStream("10input.txt.gz")
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream("10input.txt"));
// console.log("File Decompressed");