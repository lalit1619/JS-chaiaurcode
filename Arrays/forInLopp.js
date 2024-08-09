// for in loop in an array

//it provides index

const fruits = ['apple','mango','grapes'];
const fruit2=[];
for(let fruit in fruits)
{
    fruit2.push(fruits[fruit].toUpperCase());
}
console.log(fruit2);
