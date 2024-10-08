console.log("hello world");
const grandParent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
child.addEventListener("click",()=>{
    console.log("you clicked child");
})
parent.addEventListener("click",()=>{
    console.log("you clicked parent");
})
grandParent.addEventListener("click",()=>{
    console.log("you clicked on grandparent");
})
const body= document.body;
body.addEventListener("click",()=>{
    console.log("you clicked on body");
})

//in this javasrcipt code if we are clicking the
//child div but then also it is executing parent as well as grandparet
//click output

//this is useful but where ??


//this is event bubling if we are clikcking on someones child then the body
//itself is getting invoked if the event is applied in its parent


