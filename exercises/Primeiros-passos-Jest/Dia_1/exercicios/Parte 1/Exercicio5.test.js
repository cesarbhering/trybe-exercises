const { test, expect } = require('@jest/globals');
const obj = require('./Exercicio5');

describe('Testa o Exercicio 5 da parte 1, testa JSONs iguais.', () => {
  test('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
    expect(false).toEqual(obj.obj1 === obj.obj2)
  })
})