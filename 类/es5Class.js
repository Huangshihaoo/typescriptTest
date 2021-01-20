// es5类

// 1、定义类
function Person1() {
    this.name = 'zhangsan';
    this.age = 20;
}

let p = new Person1();
console.log(p.name);

// 2、实例方法
function Person2() {
    this.name = 'zhangsan';
    this.age = 20;
    this.run = function () { // 实例方法
        console.log(this.name + 'run');
    }
}
// 3、原型链属性与方法会被多个实例共享
Person2.prototype.sex = "女"; // 原型链属性
Person2.prototype.show = function () { // 原型链方法
    console.log(this.name + 'show');
}

// 不管是实例还是原型链都要构造后才能用
let p2 = new Person2()
p2.show();
p2.run();
console.log(p2.sex);

// 4、静态方法
function Person3() {
    this.name = 'zhangsan';
    this.age = 20;
    this.run = function () { // 实例方法
        console.log('run');
    }
}

// 静态方法
Person3.show = function () {
    console.log(this.name + "show");
}
// 不new也可以
Person3.show();



// 5、继承对象冒充实现继承
function Student() {
    Person2.call(this); // 对象冒充实现继承
}

let stu = new Student();
stu.run();
// stu.show(); // 错误 不能调用原型链方法

// 6、原型链继承 实例化子类时无法传参
function Student2() {

}

Student2.prototype = new Person2();

let stu2 = new Student2();

console.log(stu2.name);
stu2.show();
stu2.run();



// 7\原型链加对象冒充
function Person4(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () { // 实例方法
        console.log(name + 'run');
    }
}
// 7、
Person4.prototype.sex = "女"; // 原型链属性
Person4.prototype.show = function () { // 原型链方法
    console.log(this.name+'show');
}

function Student3(name, age) {
    Person4.call(this, name, age)
}
// Student3.prototype = new Person4();
Student3.prototype = Person4.prototype // 也可以实现原型链继承


let stu3 = new Student3('lisi',10);
stu3.show();
stu3.run();