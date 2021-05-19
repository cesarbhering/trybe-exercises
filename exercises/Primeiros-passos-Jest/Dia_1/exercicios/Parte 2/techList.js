// Desafio 10
const techList = (array, name) => {
  array = array.sort();
  return array.length > 0 ? array.map((element) => ({tech: element, name}) ) : 'Vazio!';
}
module.exports = techList;
