//Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const { test, expect } = require('@jest/globals');
const uppercase = require('./Exercicio1');

describe('Testes exercício 1, função uppercase.', () => { //Perguntar no plantão não entendi esta questão do done e do result como callback.
  test('Função pega a palavra "cruzeiro" e transforma em "CRUZEIRO"', (done) => {
    uppercase('cruzeiro', (result) => {
      expect(result).toBe('CRUZEIRO');
      done();
    })
  })
})