// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

angleA = 90;
angleB = 45;
angleC = 44;

if (angleA + angleB + angleC != 180) {
  console.log('false');
}
else if (angleA >0 && angleB > 0 && angleC >0) {
  console.log('true')
}

if (angleA <= 0 || angleB <= 0 || angleC <= 0) {
  console.log('Um dos ângulos informados é inválido')
}

