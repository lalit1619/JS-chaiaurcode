//capturing events
const grandParent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
const body= document.body;
// child.addEventListener("click",()=>{
//     console.log("capture!!! child");
// },true);
// parent.addEventListener("click",()=>{
//     console.log("capture !!! parent");
// },true);
grandParent.addEventListener("click",()=>{
    console.log("capture !!! grandparent");
},true);

body.addEventListener("click",()=>{
    console.log("capture !!! body");
},true);


child.addEventListener("click",()=>{
    console.log("you clicked child");
})
parent.addEventListener("click",()=>{
    console.log("you clicked parent");
})
// grandParent.addEventListener("click",()=>{
//     console.log("you clicked on grandparent");
// })
// body.addEventListener("click",()=>{
//     console.log("you clicked on body");
// })

//capturing events
//will add a third argument and that is boolean
//and it decides weather to capture or not 
//in capturing first it will look for the parent element
//weather it is captured or not and then it will
//capture from the main node and then according to decendant
//and then after bubbling will start

