const { test, expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./Exercicio3');

describe('Testa o Exercicio 3 da parte 1, função myRemoveWithoutCopy.', () => {
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });
  test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 0));
  });
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  })
})