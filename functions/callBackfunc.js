// //call back function if we want to pass pass as a argument 

// function myFunc2()
// {
//     console.log("I am here");
// }

// let myfunc1=(callback)=>
// {
//     let num1=10;
//     let num2=20;
//     console.log(num1+num2);
//     callback();
//     console.log("its num3")

// }

// myfunc1(myFunc2);



// let arr=[1,3,5,6,7,9];
// function func(arr,callback){
//     let temp=[];
//     for(let i=0;i<arr.length;i++){
// let item=callback(arr[i]);
// temp.push(item);
//     }
//     return temp;
// }
// // const sqr=func(arr,(ele)=>ele*ele);
// function sqr(ele){
//     return ele*ele;
// }
// const cub=func(arr,sqr)
// console.log(cub);
// Map
// filter reduce
let arr=[1,2,3,4,5];
function func(arr,callback)
{
    let temp=[];

    for(let i=0;i<arr.length;i++)
    {
        let item=callback(arr[i]);
        temp.push(item);
    }

    return temp;
    
    
}
let square=(element)=>
{
   return element*element;
}
let cube=(element)=>
    {
        return element*element*element;
    } 


let sqr=func(arr,square);
console.log(sqr);
let cb=func(arr,cube);
console.log(cb);