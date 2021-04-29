const assert = require('assert');
///Escreva a função sumAllNumbers para passar nos testes já implementados.
// escreva a função sumAllNumbers aqui

// Pesquisado em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const sumAllNumbers = (array) => array.reduce((total, valor) => total + valor);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);