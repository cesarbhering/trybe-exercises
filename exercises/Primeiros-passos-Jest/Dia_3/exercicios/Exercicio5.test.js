// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const Exercicio5 = require('./stringManipulation');
//jest.mock('./stringManipulation')

describe('Testes solicitados no exercício 5', () => {
  test('Primeira Função', () => {
    const upperStringMock = jest.spyOn(Exercicio5, "upperString").mockImplementation((string) => string.toLowerCase());
    expect(upperStringMock('Cesar')).toBe('cesar');
    Exercicio5.upperString.mockRestore();
    expect(Exercicio5.upperString('cesar')).toBe('CESAR')
  });
});