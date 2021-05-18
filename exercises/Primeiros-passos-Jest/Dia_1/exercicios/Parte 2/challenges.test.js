const { test, expect } = require('@jest/globals');
const challenges = require('./challenges');

describe('Testa as funções encode e decode de challenges.js', () => {
  test('Teste se encode e decode são funções', () => {
    expect(true).toEqual(typeof challenges.encode === 'function' && typeof challenges.decode === 'function');
  });
  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect('12345').toEqual(challenges.encode('aeiou'));
  });
  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', () => {
    expect('aeiou').toEqual(challenges.decode('12345'))
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect('6789').toEqual(challenges.decode('6789'))
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect('bcdfghj').toEqual(challenges.encode('bcdfghj'))
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(5).toEqual(challenges.decode('12345').length);
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(5).toEqual(challenges.encode('aeiou').length);
  });
})