//Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

let Exercicio2 = require('./math');

test('Teste solicitado exercício 2', () => {
    const mockRandNumber = jest.spyOn(Exercicio2, "randomNum").mockImplementation((a,b) => a /b);
    expect(mockRandNumber(10,2)).toBe(5);
    expect(mockRandNumber).toHaveBeenCalled();
    Exercicio2.randomNum.mockRestore();
    const mockRandNumber2 = jest.spyOn(Exercicio2, "randomNum").mockReturnValue(2);
    expect(mockRandNumber2()).toBe(2);
} );