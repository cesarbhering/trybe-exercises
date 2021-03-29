//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function checkPalindrome(word) {
  wordReversed = []
  word = word.split('');
  for (let letter of word) {
    wordReversed.unshift(letter);
  }
  wordReversed = wordReversed.toString().toLowerCase();
  word = word.toString().toLowerCase();

 return (word == wordReversed);

}
console.log(checkPalindrome('arara'));


//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

teste = [2, 3, 6, 7, 10, 1];

function higherValue(numbers) {
  highestValue = 0;
  for (let num of numbers){
    if (num > highestValue) {
      highestValue = num;
    }
  }
  return highestValue;
}

console.log(higherValue(teste));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

teste2 = [2, 4, 6, 7, 10, 0, -3];

function lowerValue(numbers) {
  lowestValue = numbers[0];
  for (let num of numbers){
    if (num < lowestValue) {
      lowestValue = num;
    }
  }
  return lowestValue;
}

console.log(lowerValue(teste2));

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

nomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(array) {
  biggerName = array[0]
  for (let name of array) {
    if (name.length > biggerName.length) {
      biggerName = name;
    }
  }
  return biggerName;
}

console.log(biggestName(nomes));

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

teste3 = [2, 3, 2, 5, 8, 2, 3];

function numRepeat(array) {
  let dict = {};
  let moreRepeats = '';
  for (num of array) {
    dict[num] = 0;
  }
  for (num of array) {
    dict[num]++;
  }
  for (num in dict) {
    if (dict[num] > moreRepeats) {
      moreRepeats = num;
    }
  }
  return moreRepeats;
}

console.log(numRepeat(teste3));

//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function repeatNum(numero) {
  buffer = 0;
  for (index = 1; index <= numero; index += 1){
    buffer  += index;
  }
  return buffer;
}

console.log(repeatNum(5));

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function checkWord(word, ending) {
  if (word.slice(ending.length+1) == ending) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkWord('trybe', 'be'));
console.log(checkWord('joaofernando', 'fernan'));