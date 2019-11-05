function arraysSimilar (arr1, arr2) {
  // 判断是否是数组以及长度是否相等
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) return false;
  var a1 = [], a2 = [];
  // 判断类型是否一致
  for (var i = 0; i < arr1.length; i++) {
      a1.push(typeof(arr1[i]));
      a2.push(typeof(arr2[i]));
  }
  if (a1.sort().toString() !== a2.sort().toString()) {
        return false;
  } else {
    return true;
  }
}

console.log(arraysSimilar([1, true], [false, 2]));