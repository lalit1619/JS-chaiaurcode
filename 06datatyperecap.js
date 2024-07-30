//primitive data types
//call by value value is copied not the memory refrence is given

//7 types
//string, Number, Boolean, null, undefined, symbol, BigInt


// refrence type (non primitive)

//array, Objects, Functions

//langauge of are two typed dynamically typed and statically typed

//javascript is dynamically typed because we dont need to define data type

//use of symbol

let id=Symbol('123')
let secondId=Symbol('123')
console.log(id===secondId);


//arrays

const heros=["lalit", "bhatta", "heroho"];

//object

let myObj = {
    name:"lalit",
    age:19,
}

//function as a variable

const myFunction = function()
{
    console.log("Hello World");
}
myFunction();

console.log(typeof myFunction);
console.log(typeof myObj)
