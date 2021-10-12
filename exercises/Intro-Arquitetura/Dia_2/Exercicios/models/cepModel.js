const connection = require('./connection');

const findByCep = async (id) => {
  const query = "SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?";
  const selectedCep = await connection.execute(query, [id]);
  if (selectedCep[0].length === 0) return false;
  return selectedCep[0];
}

const addLocation = async (cep, logradouro, bairro, localidade, uf) => {
  const query = "INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)";
  const insertLocation = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  return {cep, logradouro, bairro, localidade, uf};
}

module.exports = { findByCep, addLocation };