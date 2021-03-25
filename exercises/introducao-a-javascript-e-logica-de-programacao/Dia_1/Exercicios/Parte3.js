// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let numA = 103;
let numB = 101;
let numC = 99;

if (numA > numB && numA > numC) {
  console.log(numA);
}
  else if (numA < numB && numB > numC) {
    console.log(numB);
  }
  else if ((numC > numA && numC > numB)) {
    console.log(numC)
  }
  else if (numA == numB && numB == numC) {
    console.log("Números iguais.");
  }
  else {
    console.log("Números inseridos inválidos.");
  }