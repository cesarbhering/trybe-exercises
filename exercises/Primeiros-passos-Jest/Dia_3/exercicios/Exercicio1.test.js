//Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const Exercicio1 = require('./math');

test('Testa função randomNum', () => {
  Exercicio1.randomNum = jest.fn().mockReturnValue(10);
  Exercicio1.randomNum();
  expect(Exercicio1.randomNum).toHaveBeenCalled();
  expect(Exercicio1.randomNum()).toBe(10);
  expect(Exercicio1.randomNum).toHaveBeenCalledTimes(2);
});