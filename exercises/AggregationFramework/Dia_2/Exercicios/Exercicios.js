/* Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
arredonde para baixo o valor da idade;
calcule a idade usando a diferença entre a data corrente e a data de nascimento;
1 dia é igual a 86400000 milissegundos. */
db.clientes.aggregate([{$addFields: {idade: {$floor: {$divide: [{$subtract: [new Date(),"$dataNascimento"]}, { $multiply: [86400000, 365] }]}}}}]);
/* Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos. */
db.clientes.aggregate([{$addFields: 
  {idade: 
    {$floor: 
      {$divide: 
        [{$subtract: [new Date(),"$dataNascimento"]}, { $multiply: [86400000, 365] }]
      }}}},
    {$match: {idade: {$gte:18, $lte:25}}},
  {$count: "ClientesEntre18e25:"}]);
/* Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras . */
db.clientes.aggregate([{$addFields: 
  {idade: 
    {$floor: 
      {$divide: 
        [{$subtract: [new Date(),"$dataNascimento"]}, { $multiply: [86400000, 365] }]
      }}}},
    {$lookup: {from: "vendas", localField: "clienteId", foreignField: "clienteId", as: "compras"}}]);
/* Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 . */
db.clientes.aggregate([{$addFields: 
  {idade: 
    {$floor: 
      {$divide: 
        [{$subtract: [new Date(),"$dataNascimento"]}, { $multiply: [86400000, 365] }]
      }}}},
    {$lookup: {from: "vendas", localField: "clienteId", foreignField: "clienteId", as: "compras"}},
  {$match: {"compras.dataVenda": {$gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31')}}}]);
/* Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados. */
db.clientes.aggregate([{$addFields: 
  {idade: 
    {$floor: 
      {$divide: 
        [{$subtract: [new Date(),"$dataNascimento"]}, { $multiply: [86400000, 365] }]
      }}}},
    {$lookup: {from: "vendas", localField: "clienteId", foreignField: "clienteId", as: "compras"}},
  {$match: {"compras.dataVenda": {$gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31')}}}]).itcount();