
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
  //https://www.codegrepper.com/code-examples/javascript/how+to+count+character+of+a+string+in+js
  return names.reduce((acc, curr) => curr.match(/[Aa]/g) ? acc + curr.match(/[Aa]/g || []).length : acc, 0)
}


assert.deepStrictEqual(containsA(), 20);