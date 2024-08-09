// array  destructuring
const myArray=['value1','value2','value3'];
let myVar1=myArray[0];
let myvar2=myArray[1];

//equivalent to this we can write

let [myvar3,myvar4]=myArray;
console.log(myvar3,myvar4);

//if array has lesser no of elements then it gives undefined to the rest of the variables

const myArray1=['value1',];
let [val1,val2]=myArray1;
console.log(val1,val2);

const myArray2=['value1','value2','value3'];
let [val3, ,val4]=myArray2;
console.log(val3,val4);

const myNewarray=myArray2.slice(1);
console.log(myNewarray);




