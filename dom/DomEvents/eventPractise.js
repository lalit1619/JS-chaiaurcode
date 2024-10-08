//little practise with click event

const allButtons = document.querySelectorAll(".mybuttons button")
allButtons.forEach((button)=>
{
    button.addEventListener("click",(element)=>
    {
        element.target.style.color="black";
        element.target.style.backgroundColor="red";
    })
})