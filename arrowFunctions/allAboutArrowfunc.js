// const sayHello = ()=>
// {
//     console.log("hello");
// }
// sayHello();
// const sayHi = ()=>{
//     console.log("Hi");
// }
// sayHi();

// const sayLalit = ()=> console.log("LALIT");  //sinle line braces not requiered
// sayLalit();

// //variable also

// const sayBhatta = name => console.log("hello",name);
// sayBhatta("lalit");

// const greetFather = (greetings,name) => console.log(greetings+" Mr. "+name);
// greetFather("hello","Khem");

//function inside the object

const obj=
{
    name:"lalit",
    age:20,
    role:"developer",
    show:function(){
        const that=this;
        // console.log(this);
        setTimeout(()=>{
            console.log(`My name is ${this.name} and my role is ${this.role}`)
        },2000)
    }
}

obj.show();