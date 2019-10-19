const zlib = require("zlib");

const gzip = zlib.createGzip();
const fs = require("fs");
const inp = fs.createReadStream("8myTextFile.txt");
const out = fs.createWriteStream("8myTextFile.txt.gz");
inp.pipe(gzip).pipe(out);