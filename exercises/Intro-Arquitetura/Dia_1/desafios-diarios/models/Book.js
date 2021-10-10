const connection = require('./connection');
const Author = require('./Author');
const { ObjectId } = require('mongodb');

/* //getALL em MySQL
const getAll = async () => {
  const [books] = await connection.execute('SELECT title FROM books');

  return books;
} */

//getAll em mongodb
const getAll = async () => {
  return connection().then((db) => db.collection('books').find().toArray());
}

const getByAuthorId = async (author_id) => {
  const [booksData] = await connection.execute('SELECT * FROM books WHERE author_id=?',
  [author_id]);
  if (booksData.length === 0) return null;
 
  return booksData;
}

const getByBookId = async (id) => {
  const booksData = await connection().then((db) => db.collection('books').findOne(ObjectId(id)));
  if (booksData.length === 0) return null;
 
  return booksData;
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const addBook = async (title, author_id) => { 
  connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, author_id]);
}

module.exports = { getAll, getByAuthorId, getByBookId, isValid, addBook };
