const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();


/* Exercício 1 : Pense qual é o recurso que estamos trabalhando e altere os endpoints para que fiquem padronizados.
Exercício 2 : Padronize todos os retornos para JSON.
Exercício 3 : Utilize os verbos (POST, PUT, GET etc.) corretos para cada ação do CRUD.
Exercício 4 : Garanta que todos os endpoints tenham as respostas (status code) corretas, 
ou seja, código para quando der tudo certo, código pra quando ocorrer erro etc. */

router.get('/products/list-products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.send(products);
});

router.get('/products/get-by-id/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.send(product);
});

router.post('/products/add-user', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
});

router.delete('/users/delete-user/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.put('/users/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;