const todo=document.querySelector(".todo");
console.log(todo);
const newItem=document.createElement("li");
newItem.textContent="k xa yar";
todo.before(newItem);
todo.after(newItem);