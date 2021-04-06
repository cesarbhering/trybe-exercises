let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2, 
    silver: 3, 
  }
}

console.log('A Jogadora ' + player.name + ' ' +player.lastName + ' tem ' + player.age + ' anos de idade.')

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.golden + ' medalhas de prata.')

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

//--------------------------------------------------------------

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
} 
function Names(names) {
  for (let nome in names) {
    console.log('Olá ' + names[nome]);
  }
}
Names(names);

//--------------------------------------------------------------

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

function CarModel(carro) {
  for (let info in carro) {
    console.log(info, carro[info]);
  }
}

CarModel(carro);