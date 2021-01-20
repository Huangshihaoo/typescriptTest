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

// 普通装饰器 调用时不能传参 方法的参数就是类本身
function logClass(params: any) {
    console.log(params.prototype);

    params.prototype.aa = '1230';

    params.prototype.run = () => {
        console.log("run...");

    }

}

// 属性装饰器
// 外层传值
function alterName(params: string) {
    // 内层第一个值是类的原型，第二个值是装饰器调用下方的属性
    return function ale(target: any, attr: string) {
        console.log(target);
        console.log(attr);

        target[attr] = params;
    }
}

@logClass
class Log {
    @alterName('lisi')
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    work(): void {
        console.log(this.name + "在工作");

    }
}

//实例化调用了修饰器的类时，给实例设an类型，否则会报属性不存在
let l: any = new Log('zhangsan');

l.work();
console.log(l.aa);
l.run();



// 装饰器工厂，调用时要传参
// 外层做传参用
function fun(params: string) {
    // 内层是装饰器本身
    return function fun2(target: any) {
        console.log(target);
        // console.log(params);
        target.prototype.name = params;
        target.prototype.getName = () => {
            console.log(params);
            console.log(target.prototype.name);
        }
    }
}

@fun('张三')
class Person {

    work(): void {
        console.log("workkkk");

    }
}

let p: any = new Person();
p.work();
p.getName();


// 类装饰器重载类里的方法
function load(params: any) {

    return class extends params {
        // 直接修改了数据
        dbname: any = '127.0.0.1';
        // 必须重载所有
        getName() {
            console.log(this.dbname);
        }
    }
}

@load
class BDI {
    public dbname: string | undefined;

    constructor(name: string) {
        this.dbname = name;
    }

    getName(): void {
        console.log(this.dbname);
    }

}

let d = new BDI("localhost");
d.getName();

// 方法装饰器
// 外层用来传值
function renName(name:string) {
    // 内层第一个参数是方法所在类类，第二个是方法名，第三个是方法签名 .vlaue就是其方法
    return function renExma(params:any,methodName:any,desc:any) {
        console.log(params);
        params.sss = 'sss';
        params.run = ()=> {
            console.log('run...');
            
        }
        console.log(methodName);
        console.log(desc);
        let oMathod = desc.value; 
        // 这是直接修改了方法
        desc.value = function(sub:string) {
            // 先调用原方法
            oMathod.apply(this)
            // 在扩展方法
            console.log(name+'考'+sub);
        }
        
    }
}

class Student{
    public name:string = "王五";
    @renName('赵六')
    exma(subject?:string):void {
        console.log(this.name+"在考试");
    }
}

let s:any = new Student();
s.exma('语文');
console.log(s.sss);
s.run();

// 方法参数装饰器。。。