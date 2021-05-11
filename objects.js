var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.f1 = function () {
        console.log("function 1");
    };
    return MyClass;
}());
//object
var obj1 = new MyClass();
obj1.f1();
