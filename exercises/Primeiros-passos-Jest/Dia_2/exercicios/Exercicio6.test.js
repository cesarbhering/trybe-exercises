const { getAnimal, getAnimalsByAGe }  = require('./Exercicio6')

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise findAnimaslByAge', () => {
  test('Quando acha animais com a idade solicitada', () => {
    expect.assertions(1);
    return getAnimalsByAGe(5).then(animal => {
      expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }])
    })
  });
  test('Quando NÃO acha animais com a idade solicitada', () => {
    expect.assertions(1);
    return getAnimalsByAGe(8).catch(error => expect(error).toEqual('Nenhum animal com essa idade!'))
  })
});