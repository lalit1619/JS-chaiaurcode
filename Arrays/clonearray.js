// how to clone array

let array1=['apple','mango','banana'];
let array2=array1;
console.log(array1===array2);

//slice way
let array3=array1.slice(0).concat(['item4','item6']);
console.log(array3);

// //concat way

// let array4=[].concat(array1);
// console.log(array4);
let array4=[].concat(array1,['item1','item2']);
console.log("array4",array4);

// //spread operator

// let array5=[...array1];
// console.log(array5);
let array5=[...array1,"item5","item6"];
console.log("array5",array5);

let newArray=[...array4,...array5];
console.log("newarray",newArray);

//slice is super fast but many devlopers use spread operator

