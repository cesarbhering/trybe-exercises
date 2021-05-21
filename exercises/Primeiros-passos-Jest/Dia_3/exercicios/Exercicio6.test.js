const Exercicio6 = require("./Exercicio6");
jest.mock = require("./Exercicio6");

describe("Testes solicitados no exercício 6", () => {
  Exercicio6.dogPicture = jest
    .fn()
    .mockResolvedValue("Chamada realizada com Sucesso!");
  test("Verificar resposta mockada em resolves", () => {
    expect(Exercicio6.dogPicture()).resolves.toBe(
      "Chamada realizada com Sucesso!"
    );
  });
  test("Verificar resposta mockada em rejects", () => {
    Exercicio6.dogPicture = jest.fn().mockRejectedValue(new Error("error"));
    expect(Exercicio6.dogPicture()).rejects.toThrow(new Error("error"));
  });
});
