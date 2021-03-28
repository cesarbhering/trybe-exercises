//Faça um programa que diz se um número definido numa variável é primo ou não.

let number = 13;
let isPrime = true;
for (index = 2; index < number; index += 1) {
  if (number % index == 0) {
    isPrime = false;
  }
}

console.log('O número ' + number + ' é primo? ' + isPrime);
