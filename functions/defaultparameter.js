//default parameter
//earlier days we used to do this but nowadays we have concept of default para

function addTwoNo(a,b)
{
    if(b==undefined)
    {
        b=1;
    }
    return a+b;
}

function addNo(a,b=1)
{
    return(a+b);
}

console.log(addTwoNo(4));
console.log(addTwoNo(4,6));
console.log(addNo(4));
console.log(addNo(4,6));