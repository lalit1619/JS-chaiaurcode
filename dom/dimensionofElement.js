//how to find out the dimension of a element
//height and width of the element

const dimension = document.querySelector(".container");
const info = dimension.getBoundingClientRect().height; //height width top
console.log(info);