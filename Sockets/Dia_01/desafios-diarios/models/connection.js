const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'cesar',
  password: 'Creative1!',
  database: 'mvc_example'});

module.exports = connection;