//function inside function 

function myAPP()


{
    function firstHello()
    {
        console.log("hello from first func");
    }
    const hello=function()
    {
        console.log("hello from hello func");
    }

    const arrowFunc=(num1,num2)=> num1+num2;

    console.log("nothing printed");
    firstHello();
    hello();
    console.log(arrowFunc(10,20));
}
myAPP();