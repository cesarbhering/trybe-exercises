// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';
  }

  array = array.sort();
  let objectsArray = [];
  for (let techCompany of array) {
    let object = {
      tech: techCompany,
      name,
    };
    objectsArray.push(object);
  }
  return objectsArray;
}

// Desafio 11
function arraySize(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
}

function checkNumbersUndersAndOvers(array) {
  for (let n of array) {
    if (n < 0 || n > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function checkNumbersRepeating(array) {
  let numRepeat = [];
  for (let n of array) {
    numRepeat[n] = (numRepeat[n] || 0) + 1;
  }
  return (numRepeat.sort().reverse()).filter(Number)[0];
}

function generatePhoneNumber(array) {
  let checkSizeConsistency = arraySize(array);
  let checkUndersAndOversConsistency = checkNumbersUndersAndOvers(array);
  let checkRepeatConsistency = checkNumbersRepeating(array);
  if (typeof checkSizeConsistency === 'string') {
    return checkSizeConsistency;
  } if (checkRepeatConsistency >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (typeof checkUndersAndOversConsistency === 'string') {
    return checkUndersAndOversConsistency;
  }

  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}\
${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sideA = (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC));
  let sideB = (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC));
  // let sideC = (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA));

  return sideA && sideB; // && sideC;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let regex = /\d+/g; // \d+ = Pega os digitos com 1 caractere ou mais | /g = faz a "pesquisa" na string toda.
  let stringDigits = string.match(regex);
  let countTotal = 0;
  for (let n of stringDigits) {
    countTotal += parseInt(n, 10);
  }
  if (countTotal === 1) {
    return '1 copo de água';
  }
  return `${countTotal} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
