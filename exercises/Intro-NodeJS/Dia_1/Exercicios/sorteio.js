const readline = require("readline-sync");

//Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado.

const gameItSelf = () => {
  const numGuessed = readline.questionInt("Informe o seu número da sorte: ");
  const numGenerated = (Math.random() * 11).toFixed(0);
  if (numGuessed === numGenerated) {
    console.log("Parabéns, número correto!");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numGenerated}`);
  }
  const playAgain = readline.question("Quer jogar novamente? (sim/nao) ");

  if (playAgain === "sim") {
    return gameItSelf();
  } else {
    return;
  }
};

gameItSelf();

module.exports = { gameItSelf };