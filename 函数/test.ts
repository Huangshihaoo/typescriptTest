// 函数

// 一、函数的定义

// 无返回值函数
function run1(): void {

    console.log('run1');
}
run1();

// 无返回值匿名函数
const run2 = function (): void {

    console.log('run2');
}
run2();

// 有返回值
function aa(): boolean {
    return true;
}
function aa1(): number {
    return 123;
}
function aa2(): string {
    return '打';
}

// 要传参
function bb1(name: string, age: number): void {

    console.log(name + "--" + age);
}
bb1('zhangsan', 20);

// 二、可选参数
function bb2(name: string, age?: number): void {

    if (age) {
        console.log(name + '--' + age);
    } else {
        console.log(name + '年龄保密');
    }
}
bb2('zhangsan', 20);
bb2('zhangsan');

// 三、默认参数
function bb3(name: string, age: number = 20): void {
    console.log(name + '--' + age);

}
bb3('zhangsna', 30);
bb3('zhangsna');
 
// 四、剩余参数 前面定义几个变量 调用传值时传的值减去变量的值剩下的全给...的数组变量
function cc(a: number, ...result: number[]) {

    let num = a
    for (let i = 0; i < result.length; i++) {
        num += result[i];
    }
    console.log(num);

}
cc(2, 5, 8, 6, 8, 0, 5,);

// 五、函数重载
function fun(name: string): void;
function fun(age: number): void;
function fun(str: any): void {
    if (typeof str === 'string') {
        console.log('名叫' + str);
    } else {
        console.log('岁数' + str);
    }
}
fun('zhangsna');
fun(123);

// 六、箭头函数  es6
