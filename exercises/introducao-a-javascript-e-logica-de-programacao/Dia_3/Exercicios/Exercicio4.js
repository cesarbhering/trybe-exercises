// Depois, faça uma pirâmide com n asteriscos de base:
let numbers = 20;

for (let index = 1; index < numbers; index += 2) {
  console.log(' '.repeat((numbers/2)-index/2) + '*'.repeat(index));
}