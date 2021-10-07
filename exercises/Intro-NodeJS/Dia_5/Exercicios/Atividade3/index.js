/* Crie uma rota GET /posts/:id que receba uma requisição com um id como param route , verifique existência do post com aquele id, onde:
O id deve existir;
Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 404 e { "message": "post not found" } ;
Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com as informações do respectivo post;
Crie uma rota GET /posts que deve trazer todos os posts cadastrados, onde:
Se não existir posts cadastrados retorne um array vazio e um status code, ex: status 200 e { "posts": [] } ;
Se existir posts cadastrados retorne um array com os posts e um status code;
Faça um middleware de erro. Caso tenha sido requisitada uma rota inexistente deve ser retornado o código de status e um JSON , 
ex: status 404 e { "message": "Opsss, route not found!" }
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

app.get('/posts/:id', function(req, res) {
  const { id } = req.params;
  const filteredPost = posts.filter((e) => e.id === parseInt(id));
  if (!id || filteredPost.length === 0) return res.status(404).json({message: "post not found"});
  return res.status(200).json({filteredPost})
})

app.listen(3001, function (req, res) {
  console.log("Escutando na porta 3001")
});