//crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function createObj(Obj, keyWanted, value) {
  Obj[keyWanted] = value;
  return Obj;
}

console.log(createObj({Name: 'Cesar', Age: 22}, "lastName", 'Bhering'));