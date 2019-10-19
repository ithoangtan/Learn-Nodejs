function KhoaHoc(ten, hocPhi){
    this.ten = ten;
    this.hocPhi = hocPhi;
}

KhoaHoc.prototype.moTa = function() {
    console.log("Hello: " + this.ten + " " + this.hocPhi);
}

var nodejs = new KhoaHoc("Lap trinh", 5000);

nodejs.moTa(); 