const { test, expect } = require('@jest/globals');
const { TestResult } = require('@jest/types');
const myFizzBuzz = require('./Exercicio4');

describe('Testa o Exercicio 4 da parte 1, função myFizzBuzz.', () => {
  test('Uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15));
  });
  test('Uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toEqual(myFizzBuzz(9));
  });
  test('Uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect('buzz').toEqual(myFizzBuzz(25));
  });
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(8).toEqual(myFizzBuzz(8));
  });
  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(false).toEqual(myFizzBuzz('6'));
  });
})