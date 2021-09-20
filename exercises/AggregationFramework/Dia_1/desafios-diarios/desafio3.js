/* Selecione todos os clientes com as suas respectivas transações feitas; */
db.clients.aggregate([{$lookup: {from: "transactions", localField: "name", foreignField: "from", as: "TransacoesFeitasCliente"}}]);
/* Selecione quatro clientes com as suas respectivas transações recebidas; */
db.clients.aggregate([{$lookup: {from: "transactions", localField: "name", foreignField: "to", as: "TransacoesRecebidasCliente"}}, {$limit: 4}]);
/* Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.*/
db.clients.aggregate([{$lookup: {from: "transactions", localField: "name", foreignField: "to", as: "TransacoesRecebidasCliente"}}, {$match: {State: "Florida"}}]);
