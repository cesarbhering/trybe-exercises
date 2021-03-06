//apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
//1 faça a piada aparecer no DOM da sua página.
const addJoke = (joke) => {
  let newJoke = document.getElementById('jokeContainer');
  newJoke.innerText = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => addJoke(data.joke))
};


// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

const Exercicio2 = () => {
  let array1 = [];
  new Promise((resolve, reject) => {
    while (array1.length < 10) {
      let randomNum = Math.floor(Math.random() * 50) + 1;
      array1.push(randomNum * randomNum);
    }
    array1.reduce((acc, curr) => acc + curr, 0) < 8000 ? resolve() : reject()
  })
  .then(() => console.log(`Retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10: ${[2, 3, 5, 10].map((element) =>  array1.reduce((acc, curr) => acc + curr, 0) / element)}`)) // Exercicio 3.
  .then(() => console.log('Promise resolvida')) // Exercicio 2
  .then(() => console.log(`Encadeie nela uma segunda Promise que some os elementos do array: ${array1.reduce((acc, curr) => acc + curr, 0)}`)) //Exercicio5, é só isto mesmo ?
  .catch(() => console.log('Promise rejeitada\nÉ mais de oito mil! Essa promise deve estar quebrada!')) // Exercicio 2 e 4.
}

Exercicio2()

window.onload = () => fetchJoke();