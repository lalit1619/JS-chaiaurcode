let fruits=['apple','mango','grapes']
console.log(fruits);

//push adds the new member in last
//array is mutable means that the changes is observed in org array

fruits.push('pinapple');
console.log(fruits);

//pop also deletes the element from last
//pop also returns the value

let poped=fruits.pop();
console.log(fruits);
console.log(`poped fruit is ${poped}`);

