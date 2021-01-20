// 泛型的定义
// 泛型函数
function get<T>(aa: T): T {
    return aa;
}

console.log(get<string>('dasd'));

console.log(get<number>(123));

console.log(get({ sadas: 1233 }));

console.log(get([1, 2, 3, 4]));

// 泛型类
// 最小堆算法

class minNum<T> {
    public list: T[] = [];

    public add(num: T) {
        this.list.push(num);
    }

    public min(): T {
        let min: T = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i];
            }
        }
        return min;
    }
}

let n = new minNum<number>();
n.add(12);
n.add(245);
n.add(45);
n.add(101);

console.log(n.min());


// 泛型接口
interface Info {
    <T>(val: T): T;
}

let getInfo: Info = function <T>(val: T): T {
    return val;
}

// 泛型接口2
interface Info2<T> {
    (val: T): T;
}

function getInfo2<T>(val: T): T {

    return val;
}

let myGetInfo: Info2<string> = getInfo2;
let myGetInfo2: Info2<number> = getInfo2;

myGetInfo('123');

myGetInfo2(123);