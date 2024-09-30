//select multile elements using getElements by class name 
//its a array like object but we cannot use the methods or functions
//used for array   it means we can use indexing and length property of an array 
//it can be indexed
//this both are array like objects
//it return html collection
//we can use simple forloop and for of loop for html collection
//but we cannot use foreach method to iterate

const navItems = document.getElementsByClassName("itemsWithInNav");
console.log(navItems);
console.log(navItems[0]);
console.log(typeof navItems);
console.log(Array.isArray(navItems));
for(let i=0;i<navItems.length;i++)
{
    console.log(navItems[i]);
}


//USING getElementByTagName
let navItems2 = document.getElementsByTagName("a");
console.log(navItems2);  //it also provides html collection
// for(let i=0;i<navItems2.length;i++)
//     {
//         console.log(navItems2[i]);
//         navItems2[i].style.color="black"
//         navItems2[i].style.backgroundColor="white";
//     }

// for(let navitems of navItems2)
// {
//     console.log(navitems);
//     navitems.style.color="green";
// }
navItems2=Array.from(navItems2);
navItems2.forEach(element => {
    element.style.color="red";
    element.style.backgroundColor="white";
});



//GET MULTIPLE ELEMENTS USING querySelectorAll
//it returns nodelist

const navItems1=document.querySelectorAll(".itemsWithInNav a")
console.log(navItems1);
navItems1.forEach(element=>
{
    element.style.color="green";
    element.style.backgroundColor="black";
}
);