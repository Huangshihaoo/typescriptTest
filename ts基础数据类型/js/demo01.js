"use strict";
// 学习ts基础类型
// string
var str = "dasdjkas";
console.log(str);
// number 不分浮点型
var num1 = 123;
var num2 = 123.321;
console.log(num1);
console.log(num2);
// boolean
var flag1 = true;
var flag2 = false;
console.log(flag1);
console.log(flag2);
// array方法1
var arr1 = [1, 2, 3, 4];
var arr2 = ['1', '2', '3', '4'];
console.log(arr1);
console.log(arr2);
// array方法2泛型
var array1 = ["a", "b", 'c'];
var array2 = [1, 2, 3];
console.log(array1);
console.log(array2);
// 元组 tuple 基于了解数组长度以及知道相对数据类型
var tup = [1, '1', 1];
console.log(tup);
console.log(tup[2]);
// 枚举 只支持数字和字符串的枚举
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
console.log(color.red);
var color2;
(function (color2) {
    color2["red"] = "false";
    color2["green"] = "true";
    color2["blue"] = "123";
})(color2 || (color2 = {}));
console.log(color2.green);
console.log(color2.blue); // 数字枚举第一个元素未赋值默认为0,其他位置未赋值默认上一元素加1。
// 任意类型 any 常用作与dom元素 any数组
var aa = 123;
console.log(aa);
aa = "123";
console.log(aa);
aa = true;
console.log(aa);
var anyArr = [21, '4524', 4255, true];
console.log(anyArr);
// void 只能给undefined
var bb = undefined;
// null
var cc = null;
// undefined
var dd = undefined;
// never 永不存在的值的类型
var ee;
// 类型断言
var ff = '123456';
var gg = ff.length;
var hh = ff.length;
console.log(gg);
console.log(hh);
// 多种类型变量
var ii = 111;
console.log(ii);
ii = '111';
console.log(ii);
