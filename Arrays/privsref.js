// primitive vs refrence type

//this is primitive type

// let num1=6;
// let num2=num1;
// console.log(`value of num1 is ${num1}`);
// console.log(`value of num2 is ${num2}`);
// num1++;
// console.log("\nafter incrementing \n")
// console.log(`value of num1 is ${num1}`);
// console.log(`value of num2 is ${num2}`);


//refrence type
//array gets stored in heap and in stack there is a pointer pointing to that array

let array1=['item1','item2'];
let array2=array1;

//array1 and array 2 both are pointer and since we did array1=array2 then both are refrencing to the same address

console.log("before any changes\n")
console.log(`the value of array 1 ${array1}`);
console.log(`the value of array 2 ${array2}`);
console.log('\n');
array1.push('orange');
console.log("after any changes\n")
console.log(`the value of array 1 ${array1}`);
console.log(`the value of array 2 ${array2}`);


