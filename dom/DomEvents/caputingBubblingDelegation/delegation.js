//event delegation
const grandParent= document.querySelector(".grandparent");
grandParent.addEventListener("click",(e)=>
{
    console.log(e.target);
    console.log(e.target.innerText);
})


//if we click on the child either it is innermost child the event listner is called
//it is useful because we dont need to add event listner on all of the three
//it is working beutifully if we click the child div only
//it is showing both the text content of parent and the child beacuse childdiv is the child element of
//the parent  element and it is called
