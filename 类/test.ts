// typescript class

// 类的定义 
class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}

let p = new Person('zhangsna');
p.show();

// 类的继承
class Student extends Person {
    constructor(name: string) {
        super(name);
    }
    run() {
        console.log(this.name);
    }
}

let stu = new Student('lisi');
stu.run();
stu.show();

// 修饰符 public不写默认 (公有属性，类里、类外、子类都能用)
// private 私有（类里能用，类外部、子类不能用）
// protected 保护（类里能用，子类能用，类外部不能用）

class Person1 {
    public name: string;
    private age: number;
    protected sex: string;
    constructor(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    show() {
        console.log(this.name + '---' + this.age + '---' + this.sex);
    }
}

let p1 = new Person1('wangwu', 30, '难');
p1.show(); // 类里访问

// console.log(p1.age);  // 类外不可以
// console.log(p1.sex); // 类外访问
console.log(p1.name); // 类外访问



class Student1 extends Person1 {
    constructor(name: string, age: number, sex: string) {
        super(name, age, sex);
    }
    run() {
        // console.log(this.age);// 子类访问 age为私有不能访问
        console.log(this.name);// 子类访问 age为私有不能访问
        console.log(this.sex);// 子类访问 age为私有不能访问
    }
}

let s1 = new Student1('zhaoliu', 12, "难");
s1.run();

//  类的静态属性 静态方法(不能直接调用类里的属性)
class Person3 {
    constructor(age: number) {
        this.age = age;
    }
    static sex: string = '难';
    public age: number;
    static run(): void {
        console.log(this.sex + '---' + this);
    }
}

let p3 = new Person3(12);

Person3.run();

// 抽象类 继承 多态
abstract class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract eat(): any;
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        console.log(this.name + '吃狗粮');
    }
}

let huahua = new Dog('huahua');
huahua.eat();

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat(): void {
        console.log(this.name + "吃鱼");
    }
}

let diandian = new Cat('点点');
diandian.eat();

// 类做参数

class User {
    username:string | undefined;
    password:string | undefined;
}

class MysqlDb {
    add(user:User): boolean {
        console.log(user);
        return true;
    }
}

let db = new MysqlDb();

db.add({username:'zhangsan',password:"123345"});
