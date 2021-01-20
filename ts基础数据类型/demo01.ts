// 学习ts基础类型

// string
let str: string = "dasdjkas";
console.log(str);

// number 不分浮点型
let num1 = 123;
let num2 = 123.321;
console.log(num1);
console.log(num2);

// boolean
var flag1 = true;
var flag2 = false;
console.log(flag1);
console.log(flag2);

// array方法1
let arr1: number[] = [1, 2, 3, 4];
let arr2: string[] = ['1', '2', '3', '4'];
console.log(arr1);
console.log(arr2);

// array方法2泛型
let array1: Array<string> = ["a", "b", 'c'];
let array2: Array<number> = [1, 2, 3];
console.log(array1);
console.log(array2);

// 元组 tuple 基于了解数组长度以及知道相对数据类型
let tup: [number, string, number] = [1, '1', 1]
console.log(tup);
console.log(tup[2]);

// 枚举 只支持数字和字符串的枚举
enum color {
    red = 1,
    green = 2,
    blue = 3
}
console.log(color.red);

enum color2 {
    red = 'false',
    green = 'true',
    blue = '123'
}
console.log(color2.green);
console.log(color2.blue); // 数字枚举第一个元素未赋值默认为0,其他位置未赋值默认上一元素加1。

// 任意类型 any 常用作与dom元素 any数组
let aa: any = 123;
console.log(aa);
aa = "123";
console.log(aa);
aa = true;
console.log(aa);

let anyArr: any[] = [21, '4524', 4255, true];
console.log(anyArr);

// void 只能给undefined
let bb: void = undefined;

// null
let cc: null = null;

// undefined
let dd: undefined = undefined;

// never 永不存在的值的类型
let ee: never;

// 类型断言
let ff: string = '123456';
let gg: number = (ff as string).length;
let hh: number = (<string>ff).length;

console.log(gg);
console.log(hh);


// 多种类型变量
let ii: number | string = 111;
console.log(ii);
ii = '111';
console.log(ii);
