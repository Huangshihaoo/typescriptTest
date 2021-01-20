"use strict";
// 泛型的定义
// 泛型函数
function get(aa) {
    return aa;
}
console.log(get('dasd'));
console.log(get(123));
console.log(get({ sadas: 1233 }));
console.log(get([1, 2, 3, 4]));
// 泛型类
// 最小堆算法
var minNum = /** @class */ (function () {
    function minNum() {
        this.list = [];
    }
    minNum.prototype.add = function (num) {
        this.list.push(num);
    };
    minNum.prototype.min = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i];
            }
        }
        return min;
    };
    return minNum;
}());
var n = new minNum();
n.add(12);
n.add(245);
n.add(45);
n.add(101);
console.log(n.min());
var getInfo = function (val) {
    return val;
};
function getInfo2(val) {
    return val;
}
var myGetInfo = getInfo2;
var myGetInfo2 = getInfo2;
myGetInfo('123');
myGetInfo2(123);
