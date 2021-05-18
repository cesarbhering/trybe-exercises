// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
// Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. Exemplo:

const waking = () => console.log('Acordando!!');
const coffeTime = () => console.log('Bora tomar café!');
const sleep = () => console.log('Partiu dormir!!');

function doingThings(func) {
  return func();
}

doingThings(waking);