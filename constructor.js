var MyClass = /** @class */ (function () {
    function MyClass(sname) {
        //this represent the class fields here
        this.name = sname;
    }
    //method
    MyClass.prototype.f1 = function (age) {
        var info = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            info[_i - 1] = arguments[_i];
        }
        console.log(arguments);
    };
    return MyClass;
}());
//class instance
var obj1 = new MyClass("sp");
obj1.f1("shubham,22,k@gmail.com");
