// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let studentGrade = 2;

if (studentGrade > 100 || studentGrade < 0) {
  console.log('Nota maior que 100 ou menor que 0. Necessário informar nota válida entre 0 e 100.');
}
  else if (studentGrade >= 90){
    console.log('A');
  }
  else if (studentGrade >= 80) {
    console.log('B');
  }
  else if (studentGrade >= 70) {
    console.log('C');
  }
  else if (studentGrade >= 60) {
    console.log('D');
  }
  else if (studentGrade >= 50) {
    consolelog('E');
  }
  else {
    console.log('F')
  }