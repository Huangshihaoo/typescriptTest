"use strict";
/**
 * 命名空间：
 *  在代码量比较大的情况下，为避免各种变量命名相冲突，
 *  可以将类似功能的函数、类、接口等放置到命名空间内，
 *  命名空间的可以将代码包裹起来，只对外暴露需要外部访问的对象，
 *  命名空间内的对象通过 exprot 导出
 *
 *  命名空间定义
 *      namespace A{}
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
/**
 *  命名空间和模块的区别：
 *
 *     命名空间：内部模块，主要用于代码组织，避免命名冲突。
 *
 *     模   块：ts外部模块的简称，侧重代码的复用，一个模块可能有多个命名空间。
 *
 *      命名空间可以当模块导出 exprot namespace A{}
* */
var A;
(function (A) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "吃鱼");
        };
        return Cat;
    }(Animal));
    A.Cat = Cat;
})(A || (A = {}));
var huahua = new A.Cat("花花");
huahua.eat();
var B;
(function (B) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "吃鱼");
        };
        return Cat;
    }(Animal));
    B.Cat = Cat;
})(B || (B = {}));
var xiaobai = new B.Cat("小白");
xiaobai.eat();
