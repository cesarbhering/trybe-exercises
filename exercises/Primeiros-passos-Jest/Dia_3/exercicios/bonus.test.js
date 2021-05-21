const Bonus = require("./bonus");
//jest.mock = require('./bonus');

describe("Testes solicitados no bônus", () => {
  test("Mocka o resultado do fetch", () => {
    Bonus.fetchJoke = jest.fn().mockResolvedValue({
      id: "7h3oGtrOfxc",
      joke: "Whiteboards ... are remarkable.",
      status: 200,
    });
    expect(Bonus.fetchJoke()).resolves.toEqual({
      id: "7h3oGtrOfxc",
      joke: "Whiteboards ... are remarkable.",
      status: 200,
    });
  });
});
