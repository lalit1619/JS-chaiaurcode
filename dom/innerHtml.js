//everything that is written inside the container is innerHtml
const headline=document.querySelector(".headline");
console.log(headline);
console.log(headline.innerHTML);
//it shows everything that is inside that tag
headline.innerHTML="<h1>Inner Html changed</h1>";
console.log(headline.innerHTML);

//to add the new thing
headline.innerHTML+="<button class=\"btn\">this is button</button>";

// \"this is the method to use double quotes
