const name="lalit"
const repoCount=50
console.log(name+repoCount+  "value")
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);
//string interopolation

const gameName=new String('lalit-bhatta')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
const newString=gameName.substring(0,4);
console.log(gameName.slice(-11,3));
newStringOne="  lalit   "
console.log(newStringOne.trim());
const url="https://lalit.com/lalit%20bhatta"
console.log(url.replace('%20','-'));
console.log(url.includes('lalit'));
const hero="lalit-raj-bhatta"
console.log(hero.split('-'));




