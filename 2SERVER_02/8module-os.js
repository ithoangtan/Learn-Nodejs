var os = require("os");

console.log("Memory free:", os.freemem());
console.log("Home dir:", os.homedir());
console.log("host name:", os.hostname());
console.log("endianness:", os.endianness());
console.log("load avg:", os.loadavg());
console.log("Platform:", os.platform());
console.log("Release:", os.release());
console.log("tmpdir:", os.tmpdir());
console.log("total name:", os.totalmem());
console.log("type:", os.type());
console.log("uptime:", os.uptime());