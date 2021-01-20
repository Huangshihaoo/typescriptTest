// 数据库方法接口
// 泛型接口
// 默认暴露 一个模块只能有一个
export default interface DBI<T> {
    add(info:T): boolean;
    del(id:number): boolean;
    update(info:T,id:number): boolean;
    get(id:number): any[];
}