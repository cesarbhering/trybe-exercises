//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

rosetta = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  IX: 9,
  X:  10,
  XL: 40,
  L: 50,
  XC:90,
  C:100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function romanos(string) {
  result = [];
  result2 = 0;
  string = string.split('');
  if (rosetta[string[0] >= rosetta[string[1]]]);{
    for (n of string) {
      for (n2 in rosetta) {
        if (n == n2) {
          result.push(rosetta[n2]);
        }
      }
    }
  }
  else {
    for (n of string) {
      for (n2 in rosetta) {
        if (n == n2) {
          result.push(rosetta[n2]);
        }
      }
    }
  }
  for (index = 0; index < result.length; index += 1){
    result2 += result[index];
  }
  return result2;
}

console.log(romanos('IX'));