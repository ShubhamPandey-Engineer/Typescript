class MyClass{
    name:string

    constructor(sname:string)
    {
//this represent the class fields here
this.name=sname
    }

    //method
    f1(age?:number,...info){
        console.log(arguments)
    }
}


//class instance
let obj1=new MyClass("sp")
obj1.f1("shubham,22,k@gmail.com")