//function returning function

function myFunc()
{
    function hello()
    {
        console.log("hello world");
    }
    return hello;
}
ans=myFunc();
ans();