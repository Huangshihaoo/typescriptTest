import DBI from './dbi';

// 实现数据库方法
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

// 单独暴露
export let url = './aa.js';

// 一块暴露两个 不要等号
export  {
    MongoDb,
    MySqlDb
}