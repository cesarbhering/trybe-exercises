/* Selecione todos os clientes com as suas respectivas transações feitas; */
db.clients.aggregate([{$lookup: {from: "transactions", let: {nome_cliente: "$name"}, 
  pipeline: [{$match: {$expr:{$eq: ["$from", "$$nome_cliente"]}}}], as: "teste"}}]);
  