/* Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
Leia o arquivo.
Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
Caso o arquivo exista, solicite a palavra a ser substituída.
Solicite a nova palavra, que substituirá a palavra anterior.
Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
Pergunte o nome do arquivo de destino.
Salve o novo arquivo no caminho de destino.
Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra) . */
const fs = require("fs").promises;
const readline = require("readline");

async function question(pergunta) {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(pergunta, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function openFile() {
  let fileName = await question("Digite o nome do arquivo a ser lido: ");
  let openedFile = await fs.readFile(fileName, "utf8").catch(e => {
    console.log("Arquivo nao existe");
    return false;
  });
  if (!openedFile) return;
  if (!openFile) return;
  let oldWord = await question("Palavra a ser substituída: ");
  let newWord = await question("Palavra a ser inserida: ");
  let alteredFile = openedFile.replace(new RegExp(oldWord, "g"), newWord);
  console.log(alteredFile);
  let newFile = await question("Digite nome do novo arquivo: ");
  fs.writeFile(newFile, alteredFile);
}

openFile();
