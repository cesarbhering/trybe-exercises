// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

list = []
for (let index = 1; index <= 25; index += 1){
  list.push(index);
}

for (let number of list) {
  console.log(number/2)
}