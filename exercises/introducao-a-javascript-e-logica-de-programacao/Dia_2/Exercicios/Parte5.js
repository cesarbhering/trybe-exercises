let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
maxValue = 0

for (let number of numbers) {
  if (number > maxValue){
    maxValue = number;
  }
}

console.log(maxValue)