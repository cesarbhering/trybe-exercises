/* Reescreva o código do exercício anterior para que utilize async/await .
Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async . */

const { exercicio1 } = require("./Exercicios1");
const { geraNum } = require("./Exercicio2");

async function exercicio3() {
  try {
    const result = exercicio1(geraNum(),geraNum(),geraNum());
    resolve(result);
  } catch(err) {
    console.log(`erro: ${err.message}`)
  }
};

