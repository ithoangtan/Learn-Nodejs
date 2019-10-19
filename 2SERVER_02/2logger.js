var log = {
  info: function(info) {
    console.log("Info: " + info);
  },
  warning: function(waring) {
    console.log("Warning: " + waring);
  },
  error: function(error) {
    console.log("Error: " + error);
  }
};

module.exports = log;
