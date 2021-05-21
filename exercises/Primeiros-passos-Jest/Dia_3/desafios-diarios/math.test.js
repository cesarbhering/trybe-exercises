//const { test, expect, jest } = require('@jest/globals');
const { expect, test } = require('@jest/globals');
const math = require('./math');
jest.mock("./math");

describe('Testas as funçõoes do math.js', () => {
test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});
test('#subtrair', () => {
  math.subtrair.mockImplementation((a,b) => a - b);
  math.subtrair(5,2);
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(5,2);
  expect(math.subtrair(5,2)).toBe(3);
})
test('#multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.somar();
  expect(math.multiplicar(5,10)).toBe(10);
});
test('#somar', () => {
  math.somar.mockImplementation((a,b) => a + b);
  math.somar(10,20);
  expect(math.somar).toHaveBeenCalled;
  expect(math.somar(10,10)).toBe(20);
  expect(math.somar).toHaveBeenCalledWith(10,20);
});
test('#dividir', () => {
  math.dividir = jest
  .fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);
  math.dividir();
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir()).toBe(5);
  expect(math.dividir()).toBe(15)
  expect(math.dividir).toHaveBeenCalledTimes(3);
});
});

