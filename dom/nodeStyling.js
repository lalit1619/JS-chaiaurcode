const h1=document.querySelector("h1");
const div=h1.parentNode;
div.style.backgroundColor="#333"
div.style.color="#efefef";
const body=h1.parentNode.parentNode;
body.style.backgroundColor="red";
const head=document.querySelector("head");
const title=head.querySelector("title");
console.log(title);
console.log(title.childNodes);

//childNode will give the linespace also but not children
//and these are porperties

// const div=document.querySelector(".div");
console.log(div.children);
console.log(div.childNodes);
