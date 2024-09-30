// how to create object
//the name and age can be said properties or key values

const person = {
    name : "lalit",
    age: 19

};
console.log(person);

// how to access daya from objects

console.log(person.name);

//we can also declare array in an object

const aboutMe={
    name:"lalit",
    age:19,
    hobbies: ['playing football', 'listening music', 'photography']

};
// console.log(aboutMe.hobbies);

// //how to add key value pairs in an object
// aboutMe.gender="male";
// console.log(aboutMe)
// console.log(aboutMe['age']);
aboutMe["gender"] = 'male';
console.log(aboutMe);

//keys are bydefault in string

