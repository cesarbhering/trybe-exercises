const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'Creative1!',
  host: 'localhost',
  database: 'cep_lookup'
});

module.exports = connection;
