//best way to attach a Js file is using
//  <script src="link" defer></script> 


// console.log(window.document)
// console.log("lalit");
// console.dir(document);

//selectors
//getElementById

console.log(document.getElementById("main-headline"));  //it returns the element in the form of object
console.log(typeof document.getElementById("main-headline")); //it shows the type object

//query selector

console.log(document.querySelector("#main-headline"));

//element selection by querySelector

console.log(document.querySelector(".container")); 
console.log(document.querySelector(".itemsWithInNav"));

//In console it prints the div with class container it only prints first div with container not other

//querySelectorAll

console.log(document.querySelectorAll(".itemsWithInNav"));





