/* eslint-disable no-param-reassign */
const express = require('express');
const { defaultPlants } = require('./index');

const app = express();
const PORT = 3000;

app.get('/plants', (req, res, _next) => {
  res.status(200).json(defaultPlants);
});

app.get('/plants/:id', (req, res, _next) => {
  const idPlant = +req.params.id;
  const plantFilter = defaultPlants.filter((plant) => plant.id === idPlant);
  res.status(200).json(plantFilter);
});

app.delete('/plants/:id', (req, res, _next) => {
  const idPlant = +req.params.id;
  defaultPlants.forEach((plant) => {
    if (plant.id === idPlant) {
      delete plant.breed;
      delete plant.needsSun;
      delete plant.origin;
      delete plant.size;
      delete plant.specialCare;
      delete plant.id;
    }
  });
  res.status(204);
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});