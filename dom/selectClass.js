const todo=document.querySelector(".todo-section");
console.log(todo.classList);
todo.classList.add("bg-dark");
todo.classList.remove("bg-dark");
const ans=todo.classList.contains("container");
console.log(ans);

//toggle will add class if not exist and remove if already exits

todo.classList.toggle("bg-dark");