// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

function factorial(num) {
  if (num <0) {
    return 'Numero Invalido';
  } else if (num === 0) {
      return 1;
  } else {
      let buffer = num * (num - 1);
      for (let index = 2; index < num; index += 1) {
        buffer = buffer * (num - index);
      }
      return buffer;
    }
}

//console.log(factorial(7))


// Para fazer este exercício eu consultei:
// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/

const factorialTernary = (num) => num === 1 ? 1 : num * factorialTernary(num - 1); // Porque funciona com o === e com o  > 0 Nao ?

console.log(factorialTernary(5));