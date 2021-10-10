const connection = require("./connection");
const { ObjectId } = require('mongodb');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

/* //retirado do course - find by em mysql
const findById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const query =
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?";
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return false;

  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  const { firstName, middleName, lastName } = serialize(authorData[0]);

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
}; */

//findby em mongodb
const findById = async (id) => {

  const authorData = await connection()
      .then((db) => db.collection('authors').findOne(ObjectId(id)));

  if (!authorData) return null;

  return authorData;
};
/*   //getl all em mysql
const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors.map(serialize).map(getNewAuthor);
} */


//get all em mongodb
const getAll = async () => {
  return connection().then((db) => db.collection("authors").find().toArray())
};

module.exports = { getAll, findById };
