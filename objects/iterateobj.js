// //how to iterate object
// //we can use for in loop or object.keys

const aboutMe={
    name:"lalit",
    age:19,
    hobbies: ['playing football', 'listening music', 'photography']

};
// for (let key in aboutMe)
// {
//     console.log(key);
//     console.log(aboutMe[key]);
//     console.log(`${key} : ${aboutMe[key]}`);
// }
// console.log(Object.keys(aboutMe));


for(let key of Object.keys(aboutMe))
{
    console.log(aboutMe[key]);
}