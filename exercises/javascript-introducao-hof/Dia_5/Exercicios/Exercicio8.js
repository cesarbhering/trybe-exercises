const assert = require('assert');

//Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const greet = (nome = 'Usuario', mensagem = 'Hi') => `${mensagem} ${nome}`;

// escreva greet abaixo

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');