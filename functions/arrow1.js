// arrow functions

 const singHappyBirthday=()=>{
console.log("happy birthday");

 }
 singHappyBirthday();

 const sumOfThreeeNumbers=(num1,num2,num3)=>
 {
    console.log(num1+num2+num3);
 }
 sumOfThreeeNumbers(10,20,20);

 const findTarget=(arr,key)=>
 {
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]==key)
            return i;
    }
    return -1;
 }
 console.log(findTarget([1,2,3,4,5,6,7],5));

 //if our functions will have only one parameter

 let oddFunc = num1 =>
 {
   console.log(num1%2!==0)
 }
 oddFunc(5);

 const isEven = number => (number%2==0);
 console.log(isEven(5));