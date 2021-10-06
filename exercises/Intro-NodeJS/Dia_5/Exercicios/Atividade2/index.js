/* Crie uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
O token deve ser uma string de 12 caracteres contendo letras e/ou números.
Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 401 e { "message": "invalid token" } ;
Caso tenha sucesso deve ser feito um fetch em uma API externa de sua preferência e retorne os dados da API como resposta;
Dicas: - Sugestão de API ( https://api.coindesk.com/v1/bpi/currentprice/BTC.json); 
- O token será passado pelo header da seguinte forma: authorization: 86567349784e; 
- Utilize middlewares para validar o token; - Para fazer uma requisição a uma API externa utilizer o FETCH ou AXIOS, parecido com que vimos em Front-end;
 */
import fetch from 'node-fetch'; //Nao da para importar como const porque ? Tem que alterar no package.json ("type": "module")
import express from 'express';
//const bodyParser = require("body-parser");
const app = express();

//app.use(bodyParser.json());

function validateToken(req, res, next) {
  const authorization = req.headers.authorization;
  if (authorization.length !== 12)
    return res.status(401).json({ message: "invalid token" });
  next();
}

app.listen(3002, function (req, res) {
  console.log("Escutando na porta 3002");
});

app.get("/btc/price", validateToken, async (req, res) => {
  const dadosBTC = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json")
  .then((data) => data.json());
  return res.status(200).json({dadosBTC})
});
