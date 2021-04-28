// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

function recebeString(string, name) {
  string =  string.split('');
  for (let letter in string) {
    if (string[letter] === 'x') {
      string[letter] = name;
    } 
  } 
  return string.join('');
} // Dá para fazer bem mais simples com regex e arrow functions. Tentar fazer.
console.log(recebeString('Tryber x aqui!', 'Cesar'));

// Com arrow function.
const recebeStringRegex = (string, name) => string.replace('x', name);
console.log(recebeStringRegex('Tryber x aqui!', 'Cesar Bhering'));


// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

const skills = ["JS", "Python", "CSS", "HTML", "React"];

// vi este exemplo abaixo no repositorio do Luiz Wendel.
// https://github.com/Luiz-Wendel/trybe-exercises/pull/19/files

const listSkills = (skills) => {
  let firstString = `${recebeStringRegex('Tryber x aqui!', 'Cesar Bhering')} Minhas cinco principais habilidades são:`;
  skills.forEach((element) => firstString += `\n${element}`); // Preciso estudar mais foreach, regex e arrow.
  return firstString
}

console.log(listSkills(skills));
