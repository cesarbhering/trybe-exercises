/* Selecione todos os bancos, ou seja, valores do campo bank ; */
db.transactions.aggregate([{$project :{_id: 0, bank: 1}}]);
/* Selecione o valor total das transações em cada banco e quantas são; */
db.transactions.aggregate([{$group: {_id: "$bank" }, totalTRansactionsValue: { $sum: "$value" }}]);
/* Selecione o valor total de transações por banco; */
/* Selecione os bancos que têm o valor total de transações maior que 1000.
 */