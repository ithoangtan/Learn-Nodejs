//CREATE Buffer:
var buff = new Buffer("NHÂN MÃ", "UTF-8");

//WRITING Buffer:
console.log(buff);
console.log(buff.toString());
console.log(buff.toJSON());

//KHI KHỞI TẠO BUFFER thì độ dài cũng được khởi tạo luôn
//NẾU WRITE QUÁ THÌ NÓ CŨNG CHỈ VỪA ĐỦ ĐỘ DÀI BAN ĐẦU
buff.write("HOÀNG LONG XÀ KIẾM");
console.log(buff);
console.log(buff.toString());
console.log(buff.toJSON());


