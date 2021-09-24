const readline = require("readline-sync");

/* Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa. */
const calculaIMC = () => {
  const peso = readline.questionInt("Qual seu peso ? ");
  const altura = readline.questionFloat("Qual sua altura ? ");

  const calcIMC = (peso, altura) => peso / altura ** 2;

  const result = calcIMC(peso, altura);
  console.log(result);

  //Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
  if (result < 18.5) {
    console.log("Abaixo do peso (magreza)");
  } else if (result >= 18.5 && result <= 24.9) {
    console.log("Peso normal");
  } else if (result >= 25.0 && result <= 29.9) {
    console.log("Acima do peso (sobrepeso)");
  } else if (result >= 30.0 && result <= 34.9) {
    console.log("Obesidade grau I");
  } else if (result >= 35.0 && result <= 39.9) {
    console.log("Obesidade grau II ");
  } else if (result >= 40.0) {
    console.log("Obesidade grau II ");
  }
};

calculaIMC();

module.exports = { calculaIMC };