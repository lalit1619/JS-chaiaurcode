//ele.insertAdjacentHTML(where,html)
//before begin 
//after begin
//before end
//after end

const todo=document.querySelector(".todo");
todo.insertAdjacentHTML("beforeend","<li>CSS element</li>")
todo.insertAdjacentHTML("afterbegin","<li>hello users</li>")
todo.insertAdjacentHTML("beforebegin","<li>hello lalit</li>")