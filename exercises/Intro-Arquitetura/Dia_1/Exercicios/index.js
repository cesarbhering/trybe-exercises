const express = require("express");
const bodyParser = require("body-parser");
const {
  createNewUser,
  validateUserInfo,
  getAllUsers,
  getUserById,
  updateUserById,
} = require("./model/userModel");
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

/* Crie o endpoint POST /user
O campo password deve ser uma string de 6 ou mais caracteres;
Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
O campo _id deve ser renomeado para id , pois a nomenclatura _id trata-se de um detalhe de implementação do MongoDB e que, portanto, 
deve ser transparente para as demais camadas da aplicação. Dessa forma, ao migrar para um banco relacional, 
por exemplo, você não precisa alterar o nome de nenhum campo da sua entidade. */
app.post("/user", validateUserInfo, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await createNewUser(firstName, lastName, email, password);
  return res.status(201).json(newUser);
});

/* Crie o endpoint GET /user
O endpoint sempre deve retornar um array;
Quando não houver nenhum usuário cadastrado, retorne um array vazio; */
app.get("/user", async (req, res) => {
  const allUsers = await getAllUsers();
  return res.status(200).json(allUsers);
});

/* Crie o endpoint GET /user/:id
O endpoint deve retornar o usuário cujo id seja igual ao parâmetro id informado na URL. O status deve ser 200 OK .
Caso um usuário com o id informado não exista, o endpoint deve retornar o conteúdo abaixo em JSON, com status 404 Not Found . */
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const selectedUser = await getUserById(id);
  if (!selectedUser)
    return res.status(404).json({
      error: true,
      message: "Usuário não encontrado",
    });
  return res.status(200).json(selectedUser);
});

/* Crie o endpoint PUT /user/:id
Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro.
Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo id foi especificado na URL.
Depois de alterar os dados do usuário no banco, retorne os novos dados com o status 200 OK 
Caso o usuário em questão não exista, retorne o status 404 Not Found  */
app.put("/user/:id", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;
  const updatedData = { firstName, lastName, email, password };
  const updatedUser = await updateUserById(id, updatedData);
  if (!updatedUser)
    return res
      .status(404)
      .json({ error: true, message: "Usuário não encontrado" });
  return res.status(200).json(updatedUser)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
