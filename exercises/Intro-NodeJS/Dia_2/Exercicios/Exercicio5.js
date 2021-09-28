/* Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
1 - Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
2 - Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] 
Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . 
Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
3 - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, 
armazene essa informação e escreva em um arquivo chamado fileAll.txt .
O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! . */
const fs = require("fs").promises;

async function writeString() {
  const strings = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];
  strings.map((e, index) => {
    fs.writeFile(`file${index + 1}.txt`, e);
  });

let fullString = ""
for (let i = 1; i <=5; i++) {
  let teste = await fs.readFile(`file${i}.txt`, "utf8");
  fullString += " " + teste;
}

await fs.writeFile("fileAll.txt", fullString);
}

writeString();