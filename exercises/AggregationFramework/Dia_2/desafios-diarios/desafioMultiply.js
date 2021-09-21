/* Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade; */
db.products.aggregate([{$project: {_id: 0, name:1, valorTotalEstoque: {$multiply: ["$sale_price", "$quantity"]}}}]);
/* Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido. */
db.products.aggregate([{$project: 
  {_id: 0, name:1, lucrotalVendas: { $subtract: [{$multiply: ["$sale_price", "$quantity"]}, {$multiply: ["$purchase_price", "$taxes"]}]}}}]);