const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.get("/validateToken", function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16)
    return res.status(401).json({ message: "Invalid Token!" });

  res.status(200).json({ message: "Valid Token!" });
});

//Modifique o código da rota POST /recipes para que receba e salve a receita com o atributo waitTime .
app.post("/recipes", function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: "Recipe created successfully!" });
});

//Crie uma rota POST /drinks que permita adicionar novas bebidas através da nossa API.
app.post("/drinks", function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: "Drink created successfully!" });
});

app.delete("/recipes/:id", function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.put("/recipes/:id", function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

//Crie uma rota PUT /drinks/:id que permita editar os atributos de uma bebida.

app.put("/drinks/:id", function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((e) => e.id === parseInt(id));
  if (drinkIndex === -1)
    return res.status(400).json({ message: "Drink not found!" });
  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };
  res.status(204).end();
});

//Crie uma rota DELETE /drinks/:id que permita remover uma bebida.

app.delete("/drinks/:id", function (req, res) {
  const { id } = req.params;
  const delDrinkIndex = drinks.findIndex((e) => e.id === parseInt(id));
  if (delDrinkIndex === -1)
    return res.status(404).json({ message: "Drink not found" });
  res.status(204).end();
});

app.get("/recipes", function (req, res) {
  res.json(recipes.sort((a, b) => a.name.localeCompare(b.name)));
});

app.get("/drinks", function (req, res) {
  res.json(drinks.sort((a, b) => a.name.localeCompare(b.name)));
});

/* Modifique o código da nossa rota para que ela receba um terceiro parâmetro através de query string com o atributo minPrice 
e modifique o filter para trazer apenas os receitas onde o valor da receita seja maior ou igual ao o valor enviado como 
parâmetro, mantendo os filtros anteriores. */

app.get("/recipes/search", function (req, res) {
  const { name } = req.query;
  const { minPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) => r.name.includes(name) && r.price >= parseInt(minPrice)
  );
  res.status(200).json(filteredRecipes);
});

app.get("/drinks/search", function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((e) => e.name.includes(name));
  res.status(200).json(filteredDrinks);
});
//Crie uma rota GET /drink/:id para retornar uma bebida pelo id .
app.get("/drinks/:id", function (req, res) {
  const { id } = req.params;
  const selectedDrink = drinks.find((e) => e.id === parseInt(id));
  if (!selectedDrink) return res.status(404).send("Drink Not Found");
  res.status(200).json(selectedDrink);
});

app.get("/recipes/:id", function (req, res) {
  const { id } = req.params;
  const selectedRecipes = recipes.find((e) => e.id == parseInt(id));
  if (!selectedRecipes) return res.status(404).send("Recipe not found");
  res.status(200).json(selectedRecipes);
});

app.all("*", function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
