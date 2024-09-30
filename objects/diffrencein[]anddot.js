//diffrence between dot and bracket notation
//we cannot use spaces in key names but with the help of bracket we can use key name with space

const aboutMe={
    name:"lalit",
    age:19,
    hobbies: ['playing football', 'listening music', 'photography'],

    //just like this
    "person interest":'football'


};
console.log(aboutMe["person interest"]);

//another diff

const key="email";
aboutMe[key]="lalitbhtta07@gmail.com"
console.log(aboutMe);


