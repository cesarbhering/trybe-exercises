const Exercicio1 = require('./Exercicio1');

test('Testa função randomNum', () => {
  Exercicio1.randomNum = jest.fn().mockReturnValue(10);
  Exercicio1.randomNum();
  expect(Exercicio1.randomNum).toHaveBeenCalled();
  expect(Exercicio1.randomNum()).toBe(10);
  expect(Exercicio1.randomNum).toHaveBeenCalledTimes(2);
});