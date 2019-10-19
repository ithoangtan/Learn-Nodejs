var net = require("net");

var server = net
  .createServer(socket => {
    socket.end("goodbye\n");
  })
  .on("error", err => {
      //handle error here
      throw err;
  });
//grab a random port

server.listen(()=> {
    address = server.address();
    console.log("Open server on: %j", address);
});