const express = require("express");
const app = express();
const port = 3003;
const bodyParser = require("body-parser");
const pingService = require("./services/pingService");
const cepService = require('./services/cepService');

app.use(bodyParser.json());
app.use("/ping", pingService);
app.use('/cep', cepService);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
