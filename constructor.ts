class MyClass{
    name:string

    constructor(sname:string)
    {
//this represent the class fields here
this.name=sname
    }

    //method
    f1(...name){
    console.log(name)
    }
}


//class instance
let obj1=new MyClass("sp","dd")
obj1.f1("dc")