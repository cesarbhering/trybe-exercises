const express = require("express");
const router = express.Router();
const {
  validateUsername,
  validateEmail,
  validatePassword,
} = require("./validations");

router.post('/register', validateUsername, validateEmail, validatePassword, function (req, res) {
  return res.status(201).json({message: "user created"})
});

router.post('/login', validateEmail, validatePassword, function (req, res) {
  const generatedToken = Math.random().toString(36).substr(2, 13); //Peguei do stackoverflow mas perdi o link.
  return res.status(201).json({token: `${generatedToken}`});
});

module.exports = router;