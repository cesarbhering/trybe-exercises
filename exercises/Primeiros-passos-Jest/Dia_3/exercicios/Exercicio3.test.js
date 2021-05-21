//Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const Exercicio3 = require('./math');

test('Teste solicitado exercício 3', () => {
  const mockRandNumber = jest.spyOn(Exercicio3, "randomNum").mockImplementation((a,b,c) => a * b * c);
  expect(mockRandNumber(2,3,2)).toEqual(12);
  expect(mockRandNumber).toBeCalled();
  expect(mockRandNumber(3,5,2)).toEqual(30);
  expect(mockRandNumber).toBeCalledTimes(2);
  Exercicio3.randomNum.mockRestore();
  const mockRandNumber2 = jest.spyOn(Exercicio3, "randomNum").mockImplementation((a,b) => a * b);
  expect(mockRandNumber2(3,4)).toEqual(12);
  expect(mockRandNumber2).toBeCalled();
  expect(mockRandNumber2).toBeCalledTimes(1);
});