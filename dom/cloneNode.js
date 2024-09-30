const todo=document.querySelector(".todo");
const li=document.createElement("li");
li.textContent=("hello manxey haru");
const li2=li.cloneNode(true); //its deep copy it will copy everything without it, It will only clone node
todo.prepend(li);
todo.append(li2);

//li is a single node so either it appends or prepends