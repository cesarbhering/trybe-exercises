/* Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
Essa função irá receber um número como parâmetro e retornar uma string como resposta;
Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
Descreva todos os cenário de teste utilizando describes ;
Descreva todos os testes que serão feitos utilizando its ;
Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado. */

const {expect} = require("chai");
const { numberType } = require("../Exercicio2");

describe("Testes do Exercício 1", () => {
  describe("Quando o número é maior que zero", () => {
    describe("a resposta", () => {
      const resposta = numberType(7);
      it("tipo 'string'", () => {
        expect(resposta).to.be.a("string")
      })
      it("é 'positivo'", () => {
        expect(resposta).to.be.equals("positivo")
      })
    })
  })
  describe("Quando o número é menor que zero", () => {
    describe("a resposta", () => {
      const resposta = numberType(-7);
      it("tipo 'string'", () => {
        expect(resposta).to.be.a("string")
      })
      it("é 'negativo'", () => {
        expect(resposta).to.be.equals("negativo")
      })
    })
  })
  describe("Quando o número é igual a zero", () => {
    describe("a resposta", () => {
      const resposta = numberType(0);
      it("tipo 'string'", () => {
        expect(resposta).to.be.a("string")
      })
      it("é 'neutro'", () => {
        expect(resposta).to.be.equals("neutro")
      })
    })
  })
  describe("Quando a variavel informada não é do tipo 'number'", () => {
    describe("a resposta", () => {
      const resposta = numberType("S");
      it("o valor deve ser um número", () => {
        expect(resposta).to.be.equal("o valor deve ser um número")
      });
    })
  })
})