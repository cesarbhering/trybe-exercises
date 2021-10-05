const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.listen(3003, () => {
  console.log("Aplicação escutando na porta 3003")
})

/* Crie uma rota GET /ping
Sua rota deve retornar o seguinte JSON: { message: 'pong' } */
app.get('/ping', function(req,res) {
  res.status(200).json({message: 'pong'});
});

/* Crie uma rota POST /hello
Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } . */
app.post('/hello', function(req,res) {
  const { name } = req.body;
  res.status(201).json({message:`Hello, ${name}!`})
});

/* Crie uma rota POST /greetings
Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized . */
app.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({message: `Hello, ${name}`});
  res.status(401).json({message: "Unauthorized"});
});

/* Crie uma rota PUT /users/:name/:age .
Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } . */
app.put('/users/:name/:age', function(req, res) {
  const { name, age } = req.params;
  res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

//Crie uma API de dados das personagens de Simpsons

/* Utilize o modulo fs do Node para ler/escrever arquivos.
Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
Caso dê tudo certo, a resposta deve voltar com status 200 OK .
Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie . */
const fs = require('fs/promises');
const { RSA_NO_PADDING } = require('constants');

function getAllChars() {
  return fs.readFile('simpsons.json', 'utf-8').then(data => JSON.parse(data));
}

/* Crie um endpoint GET /simpsons
O endpoint deve retornar um array com todos os simpsons. */
app.get('/simpsons', async (req, res) => {
  const allChars = await getAllChars();
  res.status(200).json({allChars});
});

/* Crie um endpoint GET /simpsons/:id
O endpoint deve retornar o personagem com o id informado na URL da requisição.
Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found . */
app.get('/simpsons/:id', async(req, res) => {
  const { id } = req.params;
  const allChars = await getAllChars();
  const specificChar = allChars.filter((e) => e.id === id);
  if (specificChar.length === 0) return res.status(404).json({message: 'simpson not found'})
  res.status(200).json(specificChar);
});

/* Crie um endpoint POST /simpsons .
Este endpoint deve cadastrar novos personagens.
O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . 
Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); . */
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const allChars = await getAllChars();
  //https://stackoverflow.com/questions/22844560/check-if-object-value-exists-within-a-javascript-array-of-objects-and-if-not-add/50909930#50909930
  const checkId = obj => obj.id === id;
  if (allChars.some(checkId)) return res.status(409).json({message: 'id already exists'});
  allChars.push({ id, name });
  await fs.writeFile('simpsons.json', JSON.stringify(allChars));
  res.status(204).end();
});