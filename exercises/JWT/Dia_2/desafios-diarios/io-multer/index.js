require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/envios'));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'envios/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file.mimetype.split('/')[1]);
  }
})

const upload = multer({ storage });

app.post('/envios', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file }) // Porque é gerado um arquivo quebrado ?
);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
