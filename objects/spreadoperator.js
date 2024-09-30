// //spread operator in array

// const array1 = [1,2,3];
// const array2 = [5,6,7];
// let finalArray = [array1, array2];
// console.log(finalArray);
// finalArray=[...array1,...array2];
// console.log(finalArray);
// finalArray=[...array1,...array2,..."abcd"];
// console.log(finalArray);



//spreadoperator in object

//same key is not possible in a single object the last one will overwrite

const obj1=
{
    key1 : "value1",
    key2 : "value2",
    key1 : "value3",
};
console.log(obj1);

const obj2=
{
    key1: "value unique",
    key4: "value3",
};
const obj3={...obj1,...obj2,key5:"new key",..."abcd"};
console.log(obj3);

//the last one spreaded will update value so the key1 will contain unique value




