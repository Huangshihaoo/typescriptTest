// 泛型及接口应用

// 泛型接口
interface DBI<T> {
    add(info:T): boolean;
    del(id:number): boolean;
    update(info:T,id:number): boolean;
    get(id:number): any[];
}

// 应用类
class MongoDb<T> implements DBI<T>{
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    add(info: T): boolean {
        console.log(info);
        return true
    }
    del(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }

}


class MySqlDb<T> implements DBI<T> {
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    del(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
 

}

class Obj {
    name:string | undefined;
    age:number | undefined;
    sex?: string;
}

class User {
    username: string | undefined;
    password: string | undefined;
    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }
}


let m = new MongoDb<Obj>();
let myObj = new Obj();
myObj.age = 12;
myObj.name = 'zhangsan';
myObj.sex = 'nan';
m.add(myObj);

let m2 = new MongoDb<User>();
let MyUser = new User('zhangsan','123456');
m2.add(MyUser);
