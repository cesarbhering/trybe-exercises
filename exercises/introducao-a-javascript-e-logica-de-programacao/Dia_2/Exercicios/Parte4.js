let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

n = 0
for (let numero of numbers) {
  n += numero;
}

let average = (n/numbers.length)

if (average > 20) {
  console.log('valor maior que 20.')
}
else {
  console.log('valor menor ou igual a 20');
}