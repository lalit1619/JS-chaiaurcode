//rest parameter
// if we pass many arguments but there's less no of argument then we can provide
// ... rest operator it will make the array with remaining arguments passed by the user


function myFunc(a,b,...c)
{
console.log(`a is ${a}`);
console.log(`b is ${b}`);
console.log(`c is`,c);
}
myFunc(1,2,3,4,5,6,7)