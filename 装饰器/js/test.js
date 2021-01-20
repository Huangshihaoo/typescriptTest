"use strict";
/**
 * 装饰器是一种特殊类型的声明，它能够附加到类声明，方法属性或参数上，可以修改类的行为
 *
 * 装饰器就是一个方法，可以注入到类、方法、属性、参数的功能
 *
 * 常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器
 *
 * 普通装饰器无法传参，装饰器工厂可传参
 *
 * es7标准特性
 *
 * 装饰器执行顺序
 *      属性装饰器 ==>方法装饰器 ==> 方法参数装饰器2 ==> 方法参数装饰器1 ==> 类装饰器2 ==> 类装饰器1
 *
 *      同类型装饰器执行顺序从后向前
 *
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 普通装饰器 调用时不能传参 方法的参数就是类本身
function logClass(params) {
    console.log(params.prototype);
    params.prototype.aa = '1230';
    params.prototype.run = function () {
        console.log("run...");
    };
}
// 属性装饰器
// 外层传值
function alterName(params) {
    // 内层第一个值是类的原型，第二个值是装饰器调用下方的属性
    return function ale(target, attr) {
        console.log(target);
        console.log(attr);
        target[attr] = params;
    };
}
var Log = /** @class */ (function () {
    function Log(name) {
        this.name = name;
    }
    Log.prototype.work = function () {
        console.log(this.name + "在工作");
    };
    __decorate([
        alterName('lisi')
    ], Log.prototype, "name", void 0);
    Log = __decorate([
        logClass
    ], Log);
    return Log;
}());
//实例化调用了修饰器的类时，给实例设an类型，否则会报属性不存在
var l = new Log('zhangsan');
l.work();
console.log(l.aa);
l.run();
// 装饰器工厂，调用时要传参
// 外层做传参用
function fun(params) {
    // 内层是装饰器本身
    return function fun2(target) {
        console.log(target);
        // console.log(params);
        target.prototype.name = params;
        target.prototype.getName = function () {
            console.log(params);
            console.log(target.prototype.name);
        };
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.work = function () {
        console.log("workkkk");
    };
    Person = __decorate([
        fun('张三')
    ], Person);
    return Person;
}());
var p = new Person();
p.work();
p.getName();
// 类装饰器重载类里的方法
function load(params) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 直接修改了数据
            _this.dbname = '127.0.0.1';
            return _this;
        }
        // 必须重载所有
        class_1.prototype.getName = function () {
            console.log(this.dbname);
        };
        return class_1;
    }(params));
}
var BDI = /** @class */ (function () {
    function BDI(name) {
        this.dbname = name;
    }
    BDI.prototype.getName = function () {
        console.log(this.dbname);
    };
    BDI = __decorate([
        load
    ], BDI);
    return BDI;
}());
var d = new BDI("localhost");
d.getName();
// 方法装饰器
// 外层用来传值
function renName(name) {
    // 内层第一个参数是方法所在类类，第二个是方法名，第三个是方法签名 .vlaue就是其方法
    return function renExma(params, methodName, desc) {
        console.log(params);
        params.sss = 'sss';
        params.run = function () {
            console.log('run...');
        };
        console.log(methodName);
        console.log(desc);
        var oMathod = desc.value;
        // 这是直接修改了方法
        desc.value = function (sub) {
            // 先调用原方法
            oMathod.apply(this);
            // 在扩展方法
            console.log(name + '考' + sub);
        };
    };
}
var Student = /** @class */ (function () {
    function Student() {
        this.name = "王五";
    }
    Student.prototype.exma = function (subject) {
        console.log(this.name + "在考试");
    };
    __decorate([
        renName('赵六')
    ], Student.prototype, "exma", null);
    return Student;
}());
var s = new Student();
s.exma('语文');
console.log(s.sss);
s.run();
// 方法参数装饰器。。。
