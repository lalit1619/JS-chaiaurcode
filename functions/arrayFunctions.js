//function
//input: array and target (number)
//output: index of target present or not

const arr=[1,5,9,27,6,8];
key=27;

function indexOfArray(arr,key)
{
for(let i=0;i<arr.length;i++)
{
    if(arr[i]===key)
    {
        return i;
    }
}
return -1;
}
console.log(indexOfArray(arr,key));