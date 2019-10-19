var assert = require("assert");

function add(a, b) {
  return a + b;
}
var expected = add(1, 2);
assert(expected === 4, "One plus two is three");
//Nếu expected === 3 thì không sao, nhưng nếu không === 3 nó sẽ lỗi văn
// ra như lỗi hay thấy ở màn hình console