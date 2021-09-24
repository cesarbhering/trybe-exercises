const readline = require("readline-sync");

const calcVelo = () => {
  const distancia = readline.questionInt("Qual a distancia em metros ? ");
  const tempo = readline.questionInt("Qual o tempo em segundos ? ");

  calcVelocidade = (distancia, tempo) => distancia / tempo;

  const result = calcVelocidade(distancia, tempo);

  console.log(`A velocidade é: ${result} m/s`);
};

calcVelo();

module.exports = { calcVelo };