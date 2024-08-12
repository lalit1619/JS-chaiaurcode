//lexical scope

const my_var="value1";

function my_app()
{

    const newFunc=()=>
    {
        console.log(my_var);
    }

    newFunc();
}

my_app();

//this is the concept of lexical scope first of all the function will look inside the function scope if it's found it will print the closest value
//then if not found it will look at where it is defined 
//if not in the function "my_app" then it will look global scope so this is how it works