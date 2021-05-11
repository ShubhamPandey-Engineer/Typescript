//defining a function 
let myFunc=()=>{
    console.log("fun")
}
myFunc()


//using interface in a function
   //defining a interface
   interface Names{
       name:string,
       email:string
   }

   //defining a function
   let getInfo=(person:Names)=>{
    console.log(person.name)
   }

   getInfo({name:"Sp",email:"ss"})

//rest parameter
values:["dc"]
let restPara=(...parameters:values[])=>{
    console.log(parameters)
}
