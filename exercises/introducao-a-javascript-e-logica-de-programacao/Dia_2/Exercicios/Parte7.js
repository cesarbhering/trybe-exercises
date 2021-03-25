let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
minValue = numbers[0];
for (let number of numbers) {
  if (number < minValue) {
    minValue = number;
  }
}

console.log(minValue)