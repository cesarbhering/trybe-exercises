/* Selecione todos os clientes com as suas respectivas transações feitas; */
db.clients.aggregate([{$lookup: {from: "transactions", let: {nome_cliente: "$name"}, 
  pipeline: [{$match: {$expr:{$eq: ["$from", "$$nome_cliente"]}}}], as: "teste"}}]);
/* Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética; */
db.clients.aggregate([{$lookup: {from: "transactions", let: {nome_cliente: "$name"}, 
  pipeline: [{$match: {$expr:{$eq: ["$from", "$$nome_cliente"]}}}], as: "teste"}},{$sort: {State: 1}}, {$limit: 1}]);
/* Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas. */
db.clients.aggregate([ {$match: { State: "Florida"}}, {$lookup: {from: "transactions", let: {nome_cliente: "$name", nome_estado: "$State"}, 
  pipeline: [{$match: {$expr:{$eq: ["$to", "$$nome_cliente"]}}}], as: "teste"}}]);