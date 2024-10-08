const btn = document.querySelector(".btn");
btn.addEventListener("click",()=>
{
    console.log("you clicked me ");
    console.log(this); //this in this case is button itselt either it is a normal
    //function on arrow function it is window object

})

btn.addEventListener("click",function()
{
    console.log(this);
})