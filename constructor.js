var MyClass = /** @class */ (function () {
    function MyClass(sname) {
        //this represent the class fields here
        this.name = sname;
    }
    //method
    MyClass.prototype.f1 = function () {
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i] = arguments[_i];
        }
        console.log(name);
    };
    return MyClass;
}());
//class instance
var obj1 = new MyClass("sp", "dd");
obj1.f1("dc");
