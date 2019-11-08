Object.prototype  ->  foo.prototype  ->  obj
    null            [[proto]] z = 3     [[proto]] x=1 y=2
obj.z是从foo.prototype继承来的
当对obj.z赋值时不会修改foo.prototype内的值，赋值时不会向原型链上去查找。赋值时先在obj查找有没有obj.z, 有则修改，没有则在obj内添加obj.z

obj -> {x: 1} -> Object.prototype -> null

obj -> null