// var events = require("events");
// var emm = new events.EventEmitter();
// //Hoặc có thể thay 2 dòng trên như sau:
// var event = require("events").EventEmitter;
// var em = new event();

// em.on('FirstEvent', function(data) {//nắm bắt sự kiện nào thì truyền tên của nó
//     console.log(data);
// });

// //Ngoài ra cũng có thể thực hiện
// em.addListener('FirstEvent', function(data) {
//     console.log(data);
// });

// em.emit("FirstEvent", "This is my first Nodejs event emitter sample");//Tham số 2 là dữ liệu trả về

debugger;
var emitter = require("events").EventEmitter;
var util = require("util");//Chứa hàm tiện ít

function loopProcessor(num){
    //var e = new emitter();
    var me = this;

    setTimeout(function() {
        for (var i = 1; i<= num ; i++)
        {
            e.emit("BeforeProcess", i);
            console.log("Process number:" ,i);
            e.emit("AfterProcess", i);
        }
    }, 2000);
    return this;//bản thân cái sự kiện function này bên trong thôi. 
    //Như trên kia là return ra thẳng cái emitter
}

//bên ngoài:
util.inherits(loopProcessor, emitter);//loopProcessor Kế thừa twf emitter
var lp = new loopProcessor(5);
//var lp = loopProcessor(5); 

lp.on("BeforeProcess", function(data){
    console.log("about to start the process for: " + data);
});

lp.on("AfterProcess", function(data){
    console.log("Complete processing: " + data);
});

