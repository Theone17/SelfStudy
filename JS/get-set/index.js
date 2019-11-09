// var man = {
//   name: 'xbin',
//   sex: '男',
//   get age() {
//     return new Date().getFullYear() - 1997;
//   },
//   set age(val) {
//     console.log('Age can\'t be set to ' + val);
//   }
// }
// console.log(man.age);
// man.age = 100;
// console.log(man.age);

var man = {
  name: 'xbin',
  sex: '男',
  $age: null,
  get age() {
    if (this.$age == undefined) {
      return new Date().getFullYear() - 1997;
    } else {
      return this.$age;
    }
  },
  set age(val) {
    val = +val;   // 把val转化为数字
    if (!isNaN(val) && val > 0 && val < 150) {
      this.$age = +val;
    } else {
      throw new Error('Incorrect val = ' + val);
    }
  }
}
console.log(man.age);
man.age = 100;
console.log(man.age);
man.age = 'abc';