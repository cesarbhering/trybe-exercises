const express = require("express");
const router = express.Router();

//A aplicação deve ter a rota GET /ping , que retorna o status 200 OK e o seguinte JSON:
router.get("/", (req, res) => {
  res.status(200).json({ message: "pong!" });
});

module.exports = router;
