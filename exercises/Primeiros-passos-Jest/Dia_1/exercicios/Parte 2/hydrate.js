// Desafio 13
function hydrate(string) {
  // seu código aqui
  let regex = /\d+/g; // \d+ = Pega os digitos com 1 caractere ou mais | /g = faz a "pesquisa" na string toda.
  let stringDigits = string.match(regex);
  let countTotal = 0;
  for (let n of stringDigits) {
    countTotal += parseInt(n, 10);
  }
  if (countTotal === 1) {
    return '1 copo de água';
  }
  return `${countTotal} copos de água`;
}