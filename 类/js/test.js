"use strict";
// typescript class
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
// 类的定义 
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.show = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person('zhangsna');
p.show();
// 类的继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    Student.prototype.run = function () {
        console.log(this.name);
    };
    return Student;
}(Person));
var stu = new Student('lisi');
stu.run();
stu.show();
// 修饰符 public不写默认 (公有属性，类里、类外、子类都能用)
// private 私有（类里能用，类外部、子类不能用）
// protected 保护（类里能用，子类能用，类外部不能用）
var Person1 = /** @class */ (function () {
    function Person1(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person1.prototype.show = function () {
        console.log(this.name + '---' + this.age + '---' + this.sex);
    };
    return Person1;
}());
var p1 = new Person1('wangwu', 30, '难');
p1.show(); // 类里访问
// console.log(p1.age);  // 类外不可以
// console.log(p1.sex); // 类外访问
console.log(p1.name); // 类外访问
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name, age, sex) {
        return _super.call(this, name, age, sex) || this;
    }
    Student1.prototype.run = function () {
        // console.log(this.age);// 子类访问 age为私有不能访问
        console.log(this.name); // 子类访问 age为私有不能访问
        console.log(this.sex); // 子类访问 age为私有不能访问
    };
    return Student1;
}(Person1));
var s1 = new Student1('zhaoliu', 12, "难");
s1.run();
//  类的静态属性 静态方法(不能直接调用类里的属性)
var Person3 = /** @class */ (function () {
    function Person3(age) {
        this.age = age;
    }
    Person3.run = function () {
        console.log(this.sex + '---' + this);
    };
    Person3.sex = '难';
    return Person3;
}());
var p3 = new Person3(12);
Person3.run();
// 抽象类 继承 多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃狗粮');
    };
    return Dog;
}(Animal));
var huahua = new Dog('huahua');
huahua.eat();
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
var diandian = new Cat('点点');
diandian.eat();
// 类做参数
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysqlDb;
}());
var db = new MysqlDb();
db.add({ username: 'zhangsan', password: "123345" });
