//  导入语句 as 用法
import { MongoDb, MySqlDb as Mydb } from './modules/db';


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


let my1 = new Mydb<User>();

my1.update(MyUser,10);