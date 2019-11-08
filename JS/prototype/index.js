// new/原型链
function foo() {}
foo.prototype.z = 3;

var obj = new foo();
obj.x = 1;
obj.y = 2;
obj.z = 4;  // 对obj.z赋值不会修改foo.prototype.z的值
// delete obj.z; // true

// obj.x;  // 1
// obj.y;  // 2
// obj.z;  // 3   obj.z是从foo.prototype继承来的
// typeof obj.toString;  // function
// 'z' in obj; // true
// obj.hasOwnProperty('z');  // false
// foo.prototype.z; // 3

console.log(obj.x, obj.y, obj.z, 
  typeof obj.toString, 'z' in obj, obj.hasOwnProperty('z'),
  foo.prototype.z);

// Object.create
// var obj = Object.create({x: 1});

// console.log(obj.x, typeof obj.toString, obj.hasOwnProperty('z'));

// var obj = Object.create(null);

// console.log(obj.toString);