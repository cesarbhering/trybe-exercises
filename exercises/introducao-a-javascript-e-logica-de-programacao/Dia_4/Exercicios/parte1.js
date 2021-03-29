//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log('Bem vinda ' + info.personagem +', a nossa espetacular aula de JavaScript!');

//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';
console.log(info);

//Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
  console.log(key);
}

//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let key in info) {
  console.log(info[key]);
}


//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let infoNew = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in infoNew){
  console.log(info[key] + ' e ' + infoNew[key]);
};