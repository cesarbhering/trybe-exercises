const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.strictEqual(obj1, obj2, 'Objetos não são iguais');
assert.strictEqual(obj2, obj3, 'Objetos não são iguais');
assert.strictEqual(obj1, obj3, 'Objetos não são iguais');
