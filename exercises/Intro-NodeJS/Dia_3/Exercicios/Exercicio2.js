/* Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu. */
function numberType(num){
  if (typeof num != 'number') {
    return "o valor deve ser um número";
  }else {
  if (num > 0) {
    return "positivo"
  } else if (num < 0){
    return "negativo"
  } else if (num == 0 ){
    return "neutro"
  };
}};

module.exports = {numberType};