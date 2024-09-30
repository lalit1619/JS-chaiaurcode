const itemLists= document.querySelectorAll(".todo li");
console.log(itemLists);
const todo=document.querySelector(".todo");
const liList=todo.getElementsByTagName("li")
const sixthLi=document.createElement("li");
sixthLi.textContent="hello yaar";
todo.append(sixthLi);
console.log(liList);