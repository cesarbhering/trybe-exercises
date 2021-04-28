const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function createShift(targetObj, key, value) {
  targetObj['key'] = value;
}

createShift(lesson2, 'turno', 'manhã');
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const showKeys = Obj => console.log(Object.keys(Obj));

showKeys(lesson2);
// Crie uma função para mostrar o tamanho de um objeto.
const objLength = Obj => console.log(Object.keys(Obj).length)

objLength(lesson1);
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const showValues = Obj => console.log(Object.values(Obj));

showValues(lesson2);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let allLessons = {};
allLessons = Object.assign(allLessons, {lesson1, lesson2, lesson3});


// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function calcTotalStudents(array) {
  let totalStudents = 0;
  for (const item in array){
    if ((Object.keys(array[item]).includes('numeroEstudantes'))){
      totalStudents += (Object.values(array[item])[Object.keys(array[item]).indexOf('numeroEstudantes')]);
    }
  }
  return totalStudents
}

console.log(calcTotalStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const returnKey = (Obj, index) => Object.values(Obj)[index];

//console.log(returnKey(lesson1, 0));

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (Obj, key, value) => Object.keys(Obj).includes(key) && Object.values(Obj).includes(value) ? true : false;

console.log(verifyPair(lesson3, 'turno', 'noite'));
