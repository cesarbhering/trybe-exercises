//Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.

const fs = require("fs").promises;
const nomeDoArquivo = "simpsons.json";
//Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
async function lsitChars() {
  fs.readFile(nomeDoArquivo, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .then((simpsons) => {
      return simpsons.map(({ id, name }) => `${id} - ${name}`);
    })
    .then((strings) => strings.forEach((e) => console.log(e)));
}

//Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado.
//Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function getChar(charID) {
  const data = await fs.readFile(nomeDoArquivo, "utf8").then((data) => {
    return JSON.parse(data);
  });
  const selectedChar = data.find((e) => e.id === charID);
  if (!selectedChar) {
    throw new Error("Id não encontrado");
  }
  return selectedChar;
}
//Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function delChars(char1, char2) {
  const data = await fs.readFile(nomeDoArquivo, "utf8").then((data) => {
    return JSON.parse(data);
  });
  const filteredData = data.filter((e) => e.id != char1 && e.id != char2);
  fs.writeFile(nomeDoArquivo, JSON.stringify(filteredData));
}

//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
async function filterChars(char1, char2) {
  const data = await fs.readFile(nomeDoArquivo, "utf8").then((data) => {
    return JSON.parse(data);
  });
  const filteredData = data.filter((e) => e.id == char1 || e.id == char2);
  fs.writeFile("simpsonFamily.json", JSON.stringify(filteredData));
}

//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addChar(char1) {
  const data = await fs.readFile(nomeDoArquivo, "utf8").then((data) => {
    return JSON.parse(data);
  });
  const filteredData = data.filter((e) => e.id == char1);
  const familyData = await fs
    .readFile("simpsonFamily.json", "utf8")
    .then((data) => {
      return JSON.parse(data);
    });
  fs.writeFile(
    "simpsonFamily.json",
    JSON.stringify(familyData.concat(filteredData))
  );
}

//Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function changeChar(charToInsert, charToDelete) {
  const data = await fs.readFile(nomeDoArquivo, "utf8").then((data) => {
    return JSON.parse(data);
  });
  const familyData = await fs
    .readFile("simpsonFamily.json", "utf8")
    .then((data) => {
      return JSON.parse(data);
    });
  const familityDataRemovedChar = familyData.filter(
    (e) => e.id != charToDelete
  );
  console.log(familityDataRemovedChar);
  fs.writeFile(
    "simpsonFamily.json",
    JSON.stringify(
      familityDataRemovedChar.concat(data.filter((e) => e.id == charToInsert))
    )
  );
}
