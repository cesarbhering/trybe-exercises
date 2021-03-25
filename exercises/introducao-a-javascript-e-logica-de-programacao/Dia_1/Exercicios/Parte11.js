// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let netSalary = 3000;
let liquidSalary = 0;

// Desconta o INSS do salário do cidadão.
if (netSalary < 1556.94) {
  liquidSalary = netSalary*0.92;
}
else if (netSalary <= 2594.92) {
  liquidSalary = netSalary*0.91;
}
else if (netSalary <= 5189.82) {
  liquidSalary = netSalary*0.89;
}
else if (netSalary > 5189.82) {
  liquidSalary = netSalary-570.88;
}



console.log('Salário Inteiro:',netSalary);
console.log('Salário com INSS descontado:',liquidSalary);

// Desconta o imposto de renda do salário do cidadão.
if (liquidSalary <= 1903.98) {
  liquidSalary = liquidSalary;
}
else if (liquidSalary <= 2826.65) {
  liquidSalary = liquidSalary - (liquidSalary*0.075 - 142.80)
}
else if (liquidSalary <= 3751.05) {
  liquidSalary = liquidSalary - (liquidSalary*0.15 - 354.80)
}
else if (liquidSalary <= 4664.68) {
  liquidSalary = liquidSalary - (liquidSalary*0.225 - 636.13)
}
else if (liquidSalary > 4664.68) {
  liquidSalary = liquidSalary - (liquidSalary*0.275 - 869.36)
}


console.log('Slário líquido com IR e INSS descontados:',liquidSalary)