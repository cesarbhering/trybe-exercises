const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    const selectedAnimalName = Animals.filter((animal) => animal.name === name);
    if (selectedAnimalName.length > 0) {
      return resolve(selectedAnimalName);
    };
    return reject('Nenhum animal com esse nome!');
  }) 
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then((list) => list[0]);
};
// ---------------------

const findAnimaslByAge = (age) => (
  new Promise((resolve, reject) => {
    const selectedAnimalAge = Animals.filter((animal) => animal.age === age);
    if (selectedAnimalAge.length > 0) {
      return resolve(selectedAnimalAge);
    };
    return reject('Nenhum animal com essa idade!')
  })
);

const getAnimalsByAGe = (age) => {
  return findAnimaslByAge(age).then((list) => list)
}

module.exports = { getAnimal, getAnimalsByAGe };