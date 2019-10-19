console.log(__filename);
console.log(__dirname);

setTimeout(function(){
    console.log("This is timeout 1 second");
},1000);//Chạy 1 lần duy nhất và dừng lại luôn

setInterval(function(){
    console.log("this is call foreach 2 second");
}, 2000);//Chạy sau mỗi 2s

console.log(process.env);
console.log("---------------------------------------------------\n"+
"------------------------------------------------\n");
console.log(process.stdout);
console.log("---------------------------------------------------\n"+
"------------------------------------------------\n");