/* Retorne o menor número inteiro relativo ao preço de venda de cada produto; */
db.products.aggregate([{$project:{PrecoFloor: {$floor: "$sale_price"}}}]);
/* Retorne o maior número inteiro relativo ao lucro total sobre cada produto. Nota: Desconsiderar taxas (taxes) */
db.products.aggregate([{$project: {_id: 0, name: 1,lucro: {$ceil: {$subtract: ["$sale_price", "$purchase_price"]}}}}]);
