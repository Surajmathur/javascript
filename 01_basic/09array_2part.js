const marvelHeroes =["ironman","thor","captianamerica","antman","spiderman"]
const dcHeroes =["superman","batman","flash","aquaman","wonderwoman"]

marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
//  const allHeroes=marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes,...dcHeroes]
console.log(allNewHeroes);
 