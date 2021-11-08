const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const recipes = [
  {
    id: 1,
    name: 'Lasanha',
    price: 40.0,
    waitTime: 30
  },
  {
    id: 2,
    name: 'Macarrão a Bolonhesa',
    price: 35.0,
    waitTime: 25
  },
  {
    id: 3,
    name: 'Macarrão com molho branco',
    price: 35.0,
    waitTime: 25
  },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' })
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!' })
})

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes.sort((a, b) => {
    if(a.name > b.name) return 1
    if(a.name < b.name) return -1
    return 0
  }));
})

app.get('/drinks', function(req, res) {
  res.json(drinks.sort((a, b) => {
    if(a.name > b.name) return 1
    if(a.name < b.name) return -1
    return 0
  }));
})

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((response) => response.name.includes(name) && response.price < parseInt(maxPrice) && response.price >= minPrice);
  res.status(200).json(filteredRecipes);
})

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrink = drinks.filter((response) => response.name.includes(name));
  res.status(200).json(filteredDrink)
})

app.get('/recipes/:id', function(req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if(!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
})

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((response) => response.id === parseInt(id));
  if(!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
})

app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post')
  })

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

