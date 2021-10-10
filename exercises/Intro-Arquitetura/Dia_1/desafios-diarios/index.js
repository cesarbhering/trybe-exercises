const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const Author = require("./models/Author");
const Books = require("./models/Book");

app.use(bodyParser.json());

app.get("/authors", async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get("/books", async (req, res) => {
  const { author_id } = req.query;
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.post("/books", async (req, res) => {
  // Não grava no banco de dados de jeito nenhum! Perguntar no plantão! Grande parte copiado do gabarito e msm asism não vai
  const { title, author_id } = req.body;

  if (!(await Books.isValid(title, author_id))) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  await Books.addBook(title, author_id);

  res.status(201).json({ message: "Livro criado com sucesso! " });
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByBookId(id);
  if (books === null) return res.status(400).json({ message: "Not found" });
  res.status(200).json(books);
});

app.listen(port, () => console.log(`Example app listening on port port!`));
