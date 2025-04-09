const name="suraj"
const lastName ="mathur"

//console.log(name + lastName + " value");

//console.log(`my name is ${name} and my last name is  ${lastName}`);
//console.log(`${name}${lastName}`);



const gameName = new String('surajmathur');
// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('t'));


const newGameName = gameName.substring(0,3)
console.log(newGameName);

const anotherGame = gameName.slice(2,3)
console.log(anotherGame);


const game = " mathru"
console.log(game);
console.log(game.trim());


const url =" https://surajmathur.com/mathur%101mathur"

console.log(url.replace('%','-'));

