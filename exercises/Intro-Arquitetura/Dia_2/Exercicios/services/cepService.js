const express = require("express");
const router = express.Router();
const { validateCep } = require("../middlewares/validateCep");
const { validateSchema } = require("../middlewares/validatePostCep");
const { findByCep, addLocation } = require("../models/cepModel");


/* Crie o endpoint GET /cep/:cep
O endpoint deve receber, no parâmetro :cep , um número de CEP válido.
O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.
Dica Utilize o regex \d{5}-?\d{3} para validar o CEP.
Caso o CEP seja inválido, retorne o status 400 Bad Request */
router.get("/:cep", validateCep, async (req, res) => {
  const { cep } = req.params;
  const selectedCepInfo = await findByCep(cep);
  if (selectedCepInfo === null) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });
  return res.status(200).json(selectedCepInfo);
});

router.post('/',validateSchema, async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const selectedCepInfo = await findByCep(cep);
  if (selectedCepInfo !== false) return res.status(409).json({"error": { "code": "alreadyExists", "message": "CEP já existente" }});
  const AddedObject = await addLocation(cep, logradouro, bairro, localidade, uf);
  return res.status(201).json(AddedObject);
});

module.exports = router;