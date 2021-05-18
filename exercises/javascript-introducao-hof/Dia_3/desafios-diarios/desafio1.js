const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newList = (listproducts, listprices) => listproducts.map((product, index) => ({[product]: listprices[index]}))

const teste = newList(products, prices)

console.log(teste)

const teste123 = [];
prices.forEach((precos, index) => prices[index] = prices[index] * 2);

console.log(prices);