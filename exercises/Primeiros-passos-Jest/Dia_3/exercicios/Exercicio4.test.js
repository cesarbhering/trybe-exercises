const { upperString, firstLetter, concatString } = require('./stringManipulation');
jest.mock('./stringManipulation')

describe('Teste Soolicitados no Exercicio 4', () => {
  upperString.mockImplementation((string) => string.toLowerCase());
  firstLetter.mockImplementation((string) => string[string.length-1]);
  test('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa', () => {
    expect(upperString('Cesar')).toBe('cesar');
  });
  test('uma nova implementação deve retornar a última letra de uma string', () => {
    expect(firstLetter('Cesar')).toBe('r');
  });
  test('A terceira deve receber três strings e concatená-las.', () => {
    concatString.mockImplementation((string1, string2, string3) => string1.concat(string2, string3));
    expect(concatString('Cesar', ' Cruzeiro', ' JavaScript')).toBe('Cesar Cruzeiro JavaScript');
  })
})