const firstButton= document.querySelector("#button1");
// firstButton.addEventListener("click",()=>console.log("you clicked me"));
const allButtons=document.querySelectorAll("button");
console.log(allButtons);
// for(let buttons of allButtons)
// {
//     buttons.addEventListener("click",function()
// {
//     console.log("you clicked me");
// })
// }

// for (let buttons of allButtons)
// {
//     buttons.addEventListener("click",function()
// {
//     console.log(this.textContent)
// })
    
// }
allButtons.forEach(function(event)
{
    event.addEventListener("click",function()
    {
console.log(this.textContent);
    })
})