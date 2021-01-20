"use strict";
// 函数
// 一、函数的定义
// 无返回值函数
function run1() {
    console.log('run1');
}
run1();
// 无返回值匿名函数
var run2 = function () {
    console.log('run2');
};
run2();
// 有返回值
function aa() {
    return true;
}
function aa1() {
    return 123;
}
function aa2() {
    return '打';
}
// 要传参
function bb1(name, age) {
    console.log(name + "--" + age);
}
bb1('zhangsan', 20);
// 二、可选参数
function bb2(name, age) {
    if (age) {
        console.log(name + '--' + age);
    }
    else {
        console.log(name + '年龄保密');
    }
}
bb2('zhangsan', 20);
bb2('zhangsan');
// 三、默认参数
function bb3(name, age) {
    if (age === void 0) { age = 20; }
    console.log(name + '--' + age);
}
bb3('zhangsna', 30);
bb3('zhangsna');
// 四、剩余参数 前面定义几个变量 调用传值时传的值减去变量的值剩下的全给...的数组变量
function cc(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var num = a;
    for (var i = 0; i < result.length; i++) {
        num += result[i];
    }
    console.log(num);
}
cc(2, 5, 8, 6, 8, 0, 5);
function fun(str) {
    if (typeof str === 'string') {
        console.log('名叫' + str);
    }
    else {
        console.log('岁数' + str);
    }
}
fun('zhangsna');
fun(123);
// 六、箭头函数  es6
