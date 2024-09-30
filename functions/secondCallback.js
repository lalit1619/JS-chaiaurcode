let arr=[1,2,3,4,5];
function func(arr,callback)
{
    let temp=[];
    for(let i=0;i<arr.length;i++)
    {
       let item= callback(arr[i]);
       temp.push(item);
    }
    return temp;

}

let square=element=>{
    return element*element;
}
let cube=element=>{
    return element*element*element;
}

let sqr=func(arr,square);
let cubes=func(arr,cube);
console.log(sqr);
console.log(cubes);