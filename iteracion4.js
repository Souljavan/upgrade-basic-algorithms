//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0])

//1.2
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avenger[0]='IRONMAN';

//1.3
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
alert(avengers.length)

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty','Summer')
console.log(rickAndMortyCharacters.pop())

//1.5
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(-1);

console.log(rickAndMortyCharacters.shift()+' '+rickAndMortyCharacters.pop());

//1.6
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);