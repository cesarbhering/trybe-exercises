/* Escreva um código para consumir a função construída no exercício anterior.
Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, 
utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
Utilize then e catch para manipular a Promise retornada pela função:
Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
Caso a Promise seja resolvida, escreva na tela o resultado do cálculo. */
const { exercicio1 } = require("./Exercicios1");

const geraNum = () => { return Math.floor(Math.random() * 100 + 1) };

/* Promise.all([
  exercicio1(geraNum(),geraNum(),geraNum())
]).then((result) => { console.log(`O numero gerado foi: ${result}`);
}).catch((err) => {console.log(`Erro: ${err.message}`)});
 */
exercicio1(geraNum(),geraNum(),geraNum())
  .then(result => console.log(`Resultado ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

module.exports = {geraNum};