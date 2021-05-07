// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Manga', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Leite Ninho', 'Mel'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens];
};


// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

console.log(fruitSalad(specialFruit, additionalItens));


//Neste exemplo, produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

console.log(saudacoes[1](saudacoes[0])); // Olá

const [saudacao, funcao] = saudacoes;

console.log(funcao(saudacao));

///////////////////////////////////////////////////////////////


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo.

[comida, animal, bebida] = ['arroz', 'gato', 'água'];
console.log(comida, animal, bebida); // arroz gato água

//O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,,...numerosPares ] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12]

//Do jeito que está, quando passamos person para a função nationality o retorno é João is undefined . Ajuste a função nationality para que a chamada nationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

const { nationality = 'Brazilian' } = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

console.log(getPosition(-19.8157, -43.9542));

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 10) => {
  // Escreva aqui a sua funçã
  return number * value;
};

console.log(multiply(8));