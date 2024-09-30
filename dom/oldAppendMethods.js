const todo = document.querySelector(".todo")
const li =todo.childNodes[0];
console.log(li);
const li2 = todo.cloneNode(true);
todo.appendChild(li2);

//insert before

const newElement=document.createElement("p");
newElement.textContent="hello man";
const refrence=li;
newElement.style.color="black";
todo.insertBefore(newElement,refrence);
console.log(refrence);

const newElement1=document.createElement("li");
newElement1.textContent="hello man";
todo.replaceChild(newElement1,refrence);

const newElement2=document.querySelector(".todo li")
todo.removeChild(newElement2);
