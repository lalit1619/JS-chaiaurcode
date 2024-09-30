//hoisting

checkEven(10);

function checkEven(num1)
{
    console.log(num1%2===0);
}

//this is possible to call function before declaration in the case of normal declaration 
//but this is not possible in case of function expression and arrow functions


//var gives undefined if we try to print before declaration of var 
//but in case of let or const it throws error