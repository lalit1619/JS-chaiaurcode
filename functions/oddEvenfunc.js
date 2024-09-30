function isEven(number)
{

    if(number%2==0)
    {
        return true;
    }
    return false;
}

console.log(isEven(5));

function isOdd (number)
{
    console.log(number%2!==0);
}
isOdd(5);