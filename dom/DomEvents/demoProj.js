const mainButton= document.querySelector("button");
const body=document.body;
function randomColorGenerator()
{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const randomColor=`rgb(${red},${green},${blue})`
    return randomColor;
}
const h1Text=document.querySelector("h1");
mainButton.addEventListener("click",()=>
{
    const randomColor=randomColorGenerator();
    // console.log(randomColor);
    body.style.backgroundColor=randomColor;
    h1Text.innerHTML=`current color:${randomColor}`;

})