//nested destructuring
const users= [
    {userId: 1,firstName: "Lalit", gender : 'male'},
    {userId: 2,firstName: "syam", gender : 'male'},
    {userId: 3,firstName: "Hanish", gender : 'male'},

]

const [user1, user2, user3]=users;
let [{firstName}, , {gender}]=users;
console.log(user1);
console.log(firstName);
