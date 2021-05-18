const { expect, test } = require('@jest/globals');
const sum = require('./Exercicio1');

describe('Testa o Exercício 1 da parte 1, funcão sum.', () => {
  test('A função sum recebe 4 e 5 e deve retornar 5.', () => {
    expect(5).toEqual(sum(2,3));
  });
  test('A função sum recebe 0 e 0 e deve retornar 0.', () => {
    expect(0).toEqual(sum(0,0))
  });
  test('A função sum recebe 4 e "5" e deve retornar um erro.', () => {
    expect(() => { sum(4,'5') }).toThrow();
  })
  test('A função sum recebe 4 e "5" e deve retornar um erro com a seguinte mensagem "parameters must be numbers"', () => {
    expect(() => { sum(4,'5')}).toThrowError(new Error('parameters must be numbers'));
  })
}) 