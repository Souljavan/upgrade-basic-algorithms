//1.1 
const character = {name: 'Jack Sparrow', age: 10};
character['age']=25
console.log(character)

//1.2
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 
console.log('Soy '+firstName+' '+lastName+', tengo '+age+' años y me gustan los lobos.')

//1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log('La suma de ambos juguetes es: '+(toy1['price']+toy2['price'])+' Euros')

//1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice=25000;

car1['finalPrice']=car1['basePrice']+globalBasePrice
car2['finalPrice']=car2['basePrice']+globalBasePrice
console.log("Valor Final de "+car1['name']+'es: '+car1['finalPrice']+" y el valor Final de "+car2['name']+'es: '+car2['finalPrice'])
