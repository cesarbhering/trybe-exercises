const readline = require("readline-sync");

console.log(
  "1 - Calcular IMC. \n2 - Tentar Número da Sorte \n3 - Calcular Velocidade"
);
const scripNum = readline.questionInt("Qual script você quer rodar ? ");

if (scripNum === 1) {
  const { calculaIMC } = require("./imc");
} else if (scripNum === 2) {
  const { gameItSelf } = require("./sorteio");
} else if (scripNum === 3) {
  const { calcVelo } = require("./calcVelo");
} else {
  console.log("Numero INválido");
}
