/* Crie uma rota POST /teams que receba uma requisição que envie name , initials , country e league no body da requisção, onde:
name deve ter mais de 5 caracteres;
initials deve conter no máximo 3 caracteres em caixa alta;
country deve ter mais de 3 caracteres;
league este campo é opcional;
Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
Caso tenha sucesso deve ser gravado em um arquivo o dado recebido e retornado uma resposta com o código de status e um JSON com as informações do time criado;
Na rota GET /teams deve trazer todos os times cadastrados, onde:
Se não existir times cadastrados retorne um array vazio e um status code, ex: status 200 e { "teams": [] } ;
Se existir times cadastrados retorne um array com os times e um status code; */
const express = require("express");
const app = express();
const fs = require("file-system");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

function nameValidator(req, res, next) {
  const { name } = req.body;
  if (!name || name.legnth < 6)
    return res.status(400).json({ message: "invalid data" });
  next();
}

function initialsValidator(req, res, next) {
  const { initials } = req.body;
  if (!initials || initials.legnth > 3)
    return res.status(400).json({ message: "invalid data" });
  next();
}

function countryValidator(req, res, next) {
  const { country } = req.body;
  if (!country || country.legnth < 3)
    return res.status(400).json({ message: "invalid data" });
  next();
}

app.post(
  "/teams",
  nameValidator,
  initialsValidator,
  countryValidator,
  async (req, res) => {
    const { name, initials, country, league } = req.body;
    allTeams = [];
    try {
      allTeams = JSON.parse(fs.readFileSync("./teams.txt", "utf8")); //assincrono nao funcionou nesta funçao;
      allTeams.push({ name, initials, country, league });
    } catch (err) {
      console.error(err);
    }
    await fs.writeFile(`teams.txt`, JSON.stringify(allTeams), "utf-8");
    return res.status(200).json({ name, initials, country, league });
  }
);

app.get("/teams", async (req, res) => {
  allTeams = [];
  try {
    allTeams = JSON.parse(fs.readFileSync("./teams.txt", "utf8")); //assincrono nao funcionou nesta funçao;
  } catch (err) {
    console.error(err);
  }
  if (allTeams.length === 0) return res.status(200).json({ teams: [] });
  res.status(200).json({ allTeams });
});

app.listen(3001, function (req, res) {
  console.log("Escutando na porta 3001");
});
