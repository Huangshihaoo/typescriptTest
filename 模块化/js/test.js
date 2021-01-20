"use strict";
// 泛型及接口应用
// 应用类
var MongoDb = /** @class */ (function () {
    function MongoDb() {
    }
    MongoDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MongoDb.prototype.del = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    return MongoDb;
}());
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.del = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    return MySqlDb;
}());
var Obj = /** @class */ (function () {
    function Obj() {
    }
    return Obj;
}());
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
var m = new MongoDb();
var myObj = new Obj();
myObj.age = 12;
myObj.name = 'zhangsan';
myObj.sex = 'nan';
m.add(myObj);
var m2 = new MongoDb();
var MyUser = new User('zhangsan', '123456');
m2.add(MyUser);
