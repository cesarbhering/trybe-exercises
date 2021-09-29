const {expect} = require("chai");
const sinon = require("sinon");
const fs = require('fs');
const { createFile } = require("../Exercicio5");

describe("Testes exercicio 4", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync")
  })
  after(() => {
    fs.writeFileSync.restore();
  })
  describe("a resposta", () => {
    const resposta = createFile("fileName", "this is a test");
    it("deve retornar uma 'string'", () => {
      expect(resposta).to.be.a('string');
    })
    it("deve retornar a palavra 'OK'", () => {
      expect(resposta).to.be.equal('OK');
    })
  })
})