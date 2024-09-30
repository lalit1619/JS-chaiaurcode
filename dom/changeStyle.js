//CHANGING THE COLOR OF A HTML ELEMENT

const heading=document.querySelector("#main-headline")
const second_heading=document.querySelector("div.headline h2")
// console.log(second_heading);
// console.log(second_heading.innerText);
// console.log(second_heading.textContent);
console.log(second_heading.style);
second_heading.style.color="red";
second_heading.style.backgroundColor="white";
second_heading.style.border="2px solid green";