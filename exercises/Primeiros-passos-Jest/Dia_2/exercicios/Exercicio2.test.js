//Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

const { test, expect } = require('@jest/globals');
const Exercicio2 = require('./Exercicio2');

describe('Testes solicitados no exercício 2', () => {
  test('Resultado da função getUserName para o caso em que o usuário é encontrado', () => {
    return Exercicio2.getUserName(4).then((selectedUser) => {
    expect(selectedUser).toEqual('Mark')  
    });
  });
  test('Resultado da função getUserName para o caso em que o usuário NÃO é encontrado', () => {
    return Exercicio2.getUserName(9).catch((error) => {
      expect(error).toEqual({ error: 'User with 9 not found.' })
    })
  })
})