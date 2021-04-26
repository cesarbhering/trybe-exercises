// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals.


function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Meu Código.
let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
const testingScopeArrow = escopo => escopo ? `${ifScope} ótimo, fui utilizada no escopo !` : `${elseScope}`;

console.log(testingScopeArrow(true));