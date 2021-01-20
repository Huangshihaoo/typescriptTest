// 接口

// 参数接口的定义
interface info {
    name: string;
    age: number;
}

function showInfo(info: info) {
    console.log(info.name + '--' + info.age);
}

showInfo({ name: '张三', age: 12 });//这样传必须跟接口限制一模一样

let obj = {
    name: '李四',
    age: 21,
    xxx: 'xxx'
}

showInfo(obj);//这样传可以传多不可以传少

// 接口的可选参数
interface userInfo {
    userName: string;
    password: string;
    sex?: string;
}

function showUser(user: userInfo) {
    if (user.sex) {
        console.log(user.userName + "---" + user.password + "--" + user.sex);
    } else {
        console.log(user.userName + "---" + user.password + '--性别保密');
    }
}

showUser({ userName: '张三', password: '123123', sex: 'nan' }); // 正常传
showUser({ userName: '张三', password: '123123' }); // 不传可选参数

// 函数接口定义
interface encrypt {
    (key: string, value: number): string
}

// 实现函数接口
let md5: encrypt = function (key: string, value: number): string {
    return key + value;
}

console.log(md5('zhangsan', 123455));

let hash: encrypt = function (key: string, value: number): string {
    return key + value;
}

console.log(hash('王花花', 123454));

// 可索引接口 对对象的约束
interface Obj {
    [index: string]: number;
}

let myObj: Obj = {
    aaa: 1233,
    sss: 213,
    211: 323, // 不知道这个为啥行
}

// 类类型接口

interface Animal {
    name: string;
    eat(food: string): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(this.name + '吃骨头');
    }
}

let d = new Dog('小黑');
d.eat();


class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(food: string) {
        console.log(this.name + food);
    }
}

let c = new Cat('小花');

c.eat('吃鱼');


// 类的扩展接口 接口继承接口
interface Person extends Animal {
    work(): void;
}

class Web implements Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(this.name + '吃饭');

    }
    work() {
        console.log(this.name + '工作');

    }
}

let w = new Web('王五');
w.eat();
w.work();