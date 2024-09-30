let obj =
{
    name:"Lalit",
    gender: "Male",
    // age: "19"
};

const printDetails=({name,gender,age})=>
{
    console.log(name,gender,age);
}

printDetails(obj);

