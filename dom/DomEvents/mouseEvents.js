//introduction to event 
//click event
//there are 3 ways to use click event
//first one is in html element onclick
// // onclick="console.log('hey! you clicked me')"
// const btn = document.querySelector(".btn");
// console.dir(btn);
// btn.onclick = ()=> console.log("hey you clicked me !!!");

//these two are not that preferable 

const btn=document.querySelector(".btn");
btn.addEventListener("click",()=>console.log("youclicked me"));
btn.addEventListener("click",function(){
    console.log("why you clicked me ?");
});