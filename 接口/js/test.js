"use strict";
// 接口
function showInfo(info) {
    console.log(info.name + '--' + info.age);
}
showInfo({ name: '张三', age: 12 }); //这样传必须跟接口限制一模一样
var obj = {
    name: '李四',
    age: 21,
    xxx: 'xxx'
};
showInfo(obj); //这样传可以传多不可以传少
function showUser(user) {
    if (user.sex) {
        console.log(user.userName + "---" + user.password + "--" + user.sex);
    }
    else {
        console.log(user.userName + "---" + user.password + '--性别保密');
    }
}
showUser({ userName: '张三', password: '123123', sex: 'nan' }); // 正常传
showUser({ userName: '张三', password: '123123' }); // 不传可选参数
// 实现函数接口
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('zhangsan', 123455));
var hash = function (key, value) {
    return key + value;
};
console.log(hash('王花花', 123454));
var myObj = {
    aaa: 1233,
    sss: 213,
    211: 323,
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃骨头');
    };
    return Dog;
}());
var d = new Dog('小黑');
d.eat();
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food) {
        console.log(this.name + food);
    };
    return Cat;
}());
var c = new Cat('小花');
c.eat('吃鱼');
var Web = /** @class */ (function () {
    function Web(name) {
        this.name = name;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '吃饭');
    };
    Web.prototype.work = function () {
        console.log(this.name + '工作');
    };
    return Web;
}());
var w = new Web('王五');
w.eat();
w.work();
