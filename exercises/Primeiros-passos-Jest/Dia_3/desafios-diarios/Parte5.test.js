const math = require('./math');

test('#Subtrair', () => {
  const mockSubtrair = jest
  .spyOn(math, "subtrair")
  .mockImplementation((a,b) => a * b)
  .mockReturnValue(20);

  math.subtrair(5,2);
  expect(mockSubtrair).toBeCalled;
  expect(mockSubtrair).toBeCalledTimes(1);
  expect(mockSubtrair(10,20)).toEqual(20);
  math.subtrair.mockRestore();
  expect(math.subtrair(20,10)).toBe(10);

});