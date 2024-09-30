//OBJECTS INSIDE ARRAY
//VERY USEFUL IN REAL WORLD APPLICATIONS

const users= [
    {userId: 1,firstName: "Lalit", gender : 'male'},
    {userId: 2,firstName: "syam", gender : 'male'},
    {userId: 3,firstName: "Hanish", gender : 'male'},

]

for (let user of users)
{
    console.log(user.firstName);
}