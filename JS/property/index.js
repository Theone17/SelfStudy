// 读写异常

// 属性删除
var person = {age: 22, name: 'xbin'};

console.log(person.age, person['name']);

delete person.age;
delete person['name'];

console.log(delete person.age, delete person['name']);
console.log(person.age, person['name']);

delete Object.prototype;
console.log(delete Object.prototype);

var descriptor = Object.getOwnPropertyDescriptor(Object, 'prototype');
// configurable属性标签暂时是否可被修改
descriptor.configurable;
console.log(descriptor.configurable);
// var定义的全局变量和局部变量仍然不能被删除，函数声明同理，但隐式创建的全局变量可以被delete删除

// 属性检测
var cat = new Object;
cat.legs = 4;
cat.name = 'Kitty';

console.log('legs' in cat, 'wings' in cat, 'toString' in cat);

console.log(cat.hasOwnProperty('legs'), cat.hasOwnProperty('toString'));
// 是否可枚举
console.log(cat.propertyIsEnumerable('legs'), cat.propertyIsEnumerable('toString'));

Object.defineProperty(cat, 'price', {enumerable: false, value: 1000});

console.log(cat.hasOwnProperty('price'));
console.log(cat.propertyIsEnumerable('price'));

// 属性枚举
var o = {x: 1, y: 2, z: 3};
console.log('toString' in o, o.propertyIsEnumerable('toString'));

// 遍历对象原型链上的属性
var key;
for (key in o) {
  console.log(key);
}
console.log('-----');

// 遍历对象和对象原型链上的属性
var obj = Object.create(o);
obj.a = 4;
var key;
for (key in obj) {
  console.log(key);
}
console.log('-----');

// 只处理对象上的属性
for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}