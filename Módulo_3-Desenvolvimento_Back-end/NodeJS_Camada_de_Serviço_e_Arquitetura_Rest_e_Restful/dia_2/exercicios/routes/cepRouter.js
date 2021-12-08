const express = require('express');
const { getCepController } = require('../controllers/cepController');

const cepRouter = express.Router({ mergeParams: true });

cepRouter.get('/:cep', getCepController)

module.exports = {
  cepRouter
};