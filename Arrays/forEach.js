const array=[1,2,3,4,5,6];

// function myFunc(number,index)
// {
//     console.log(`the index of the ${number} is ${index}`);

// }
// for(var i=0;i<array.length;i++)
// {
//     myFunc(array[i],i);
// }

//so now we can do the same thing using foreach in one line using callback function

array.forEach(function(number,index)
{
    console.log(array[index],index);
});

const obj=[

    {firstname: "Lalit", age:19},
    {firstname: "Hanish", age:19},
    {firstname: "Bhatta", age:21},


];

obj.forEach(function(obj1)
{
    console.log(obj1.firstname);

});

//for of loop

for (let user of obj)
{
    console.log(user.firstname);

}

obj.forEach(obj => {
    console.log(obj.firstname);
    
});