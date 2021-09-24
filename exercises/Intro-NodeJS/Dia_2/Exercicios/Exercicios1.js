/* Crie uma função que recebe três parâmetros retorna uma Promise .
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
 */

function exercicio1(num1, num2, num3) {
const promise = new Promise((resolve, reject) => {
  if (typeof num1 != "number" || typeof num2 != "number" || typeof num1 != "number") {
    reject(new Error("Informe apenas números"));
  }
  const soma = (num1 + num2) * num3;
  if (soma < 50) {
    reject(new Error("Valor muito baixo"));
  } else {
    resolve(soma);
  }
});
return promise;
};

module.exports = { exercicio1 };