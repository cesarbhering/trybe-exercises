/* 1 - Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
  1 - Pergunte à pessoa usuária qual arquivo ela deseja ler.
  2 - Leia o arquivo indicado.
  3 - Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
  4 - Caso o arquivo exista, escreva seu conteúdo na tela. */
const fs = require("fs").promises;
const readline = require("readline");

//Jogar tudo na mesma;
async function question() {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(`Qual arquivo deseja abrir? `, (nameFile) => {
      rl.close();
      resolve(nameFile);
    });
  })
}

async function readFile() {
 const teste = await question();
 fs.readFile(teste, "utf8").then((data) => console.log(data)).catch((e) => console.log(`Arquivo ${teste} inexistente`));
}

readFile();
