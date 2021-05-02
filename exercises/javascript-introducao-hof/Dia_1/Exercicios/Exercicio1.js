const addInfo = (name) => ({
  nomeCompleto: name, 
  email: `${name.replace(/ +/g,'')}@trybe.com`, // https://stackoverflow.com/questions/18159216/remove-white-space-between-the-string-using-javascript/18159251
});



const newEmployees = () => {
  const employees = {
    id1: addInfo('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: addInfo('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: addInfo('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees())