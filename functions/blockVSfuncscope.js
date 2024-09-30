//block scope vs function scope


//let and const are block scope
//var is a function scope


// {
//     let first_name="Lalit";
// }
// console.log(first_name);
//this gives an error

{
    let first_name="lalit"
    console.log(first_name);

}
{
    let first_name="Lalit"
    console.log(first_name);
    
}

//this two are different

{
    var first_name="lalit121";
}
console.log(first_name);

//let and const doesnt allow to use the variable outside the func but in case of var it is possible
