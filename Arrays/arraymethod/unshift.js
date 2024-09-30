let fruits=['apple','mango','grapes'];
console.log(fruits);

//unshift adds the element to the front position

fruits.unshift('banana','orange');
console.log(fruits);

//shift will remove the element from the front position

let removed=fruits.shift();
console.log(fruits);
console.log(removed);

//push and pop is more faster because it adds or removes from 
//last but in shift and unshift we need to shift every element so

fruits.unshift("LITCHI","JACK FRUIT");
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);