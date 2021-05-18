const { test, expect } = require('@jest/globals');
const myRemove = require('./Exercicio2');

describe('Testa o Exercicio 2 da parte 1, função MyRemove.', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });
  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 0));
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  })

})