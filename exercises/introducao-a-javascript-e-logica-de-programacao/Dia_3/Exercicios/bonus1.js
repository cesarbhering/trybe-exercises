// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let numbers = 13;

for (let index = 1; index <= numbers; index += 2) {
  if (index == 1 || index == numbers){
  console.log(' '.repeat((numbers/2)-index/2) + '*'.repeat(index));
  }
  else {
  console.log(' '.repeat((numbers/2)-index/2) + '*' + ' '.repeat(index-2) + '*'); 
  }
}