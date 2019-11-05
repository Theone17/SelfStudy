# 类型检测
  typeOf: 适合基本类型及function检测，遇到null失效。
  Object.prototype.toString: 通过{}.toString拿到适合内置对象和基本类型，遇到null和undefined失效（IE678等返回[object Object]）。
  instanceof: 适合自定义对象，也可以用来检测原生对象，在不同iframe和window间检测时失效。
