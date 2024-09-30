let winningNo=19;
let userGuess= +prompt("Guess a no"); //prompt typecheck is string
if(userGuess === winningNo )
{
    console.log("your guess is right !!")

}
else
{
    if(userGuess<winningNo)
    {
        console.log("too low");
    }
    else{
        console.log("too high");
    }
    
}