const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


const app = express()
const port = 3001


app.get('/', (req, res) => res.send("Procfile funciona mesmo!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))