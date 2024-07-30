//stack (all the primitive data type)
//heap (not primitive type)
//in stack there is call by value
//but in stack we get memory refrence

//stak implementation
let firstName = "lalit";
let newName = firstName;
newName = "bhatta";
console.log(firstName);
console.log(newName);

//heap implementation

let ob1 = {
    email: "lalitbhatta07@gmail.com",
    upi_Id: "lalit@okaxis",
}

let ob2 = ob1;

ob2.email = "lalit0933@xavier.edu.np";

console.log(ob1.email);

console.log(ob2.email);
