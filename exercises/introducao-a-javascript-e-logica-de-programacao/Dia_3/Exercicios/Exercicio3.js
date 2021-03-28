// Agora inverta o lado do triângulo.

let numbers = 15;

for (let index = 0; index < numbers; index += 1) {
  console.log(' '.repeat(numbers-index) + '*'.repeat(index+1));
}