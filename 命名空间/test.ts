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

/**
 *  命名空间和模块的区别：
 * 
 *     命名空间：内部模块，主要用于代码组织，避免命名冲突。
 * 
 *     模   块：ts外部模块的简称，侧重代码的复用，一个模块可能有多个命名空间。
 * 
 *      命名空间可以当模块导出 exprot namespace A{}
* */


namespace A {

    abstract class Animal {
        public name: string;
        constructor(name: string) {
            this.name = name;
        }
        abstract eat(): any;
    }

    export class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
        eat(): void {
            console.log(this.name + "吃鱼");
        }
    }

}

let huahua = new A.Cat("花花");

huahua.eat();

namespace B {

    abstract class Animal {
        public name: string;
        constructor(name: string) {
            this.name = name;
        }
        abstract eat(): any;
    }

    export class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
        eat(): void {
            console.log(this.name + "吃鱼");
        }
    }

}

let xiaobai = new B.Cat("小白");

xiaobai.eat();