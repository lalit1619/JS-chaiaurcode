//get and Set attribute in JS

//selecting first anchor tag

const link=document.querySelector("a");
console.log(link);

//all the text that are shown in green color are attribute

console.log(link.getAttribute("href").slice(1));
const form = document.querySelector("form.form-todo input")
console.log(form.getAttribute("type"));
link.setAttribute("href","https://www.google.com/");
console.log(link.getAttribute("href"));
