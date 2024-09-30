const todo=document.querySelector(".todo");
todo.innerHTML+="<li>todo2</li>";
todo.innerHTML+="<li>tech students</li>";

//inner html will low down performance because it not only just add
//the single element but render all three li elements
//we should use innerHtml when it needs to be create comletely new html
// const liElement=document.createElement("li");
// const newLiText=document.createTextNode("nenew");
// liElement.append(newLiText)
// todo.append(liElement);

//second way

let newTodoItem=document.createElement("li");
newTodoItem.textContent="helloWorld";
todo.prepend(newTodoItem);  //it will add element to first of the container
const todo1=document.querySelector(".todo li")
console.log(todo1);
 

