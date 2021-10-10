const mysql = require('mysql2/promise');
const { MongoClient } = require('mongodb');

/* //conexão mysql
const connection = mysql.createPool({
  user: 'trybe',
  password: 'Creative1!',
  host: 'localhost',
  database: 'model_example'
}); */

//conexão mongodb

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;


const connection = () => {
  return MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => {
  db = conn.db('model_example');
  return db;
  }).catch((err) => {
    console.error(err);
    console.exit();
  })
};

module.exports = connection;