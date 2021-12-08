const express = require('express');
const ProductModel = require('../models/productModel');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

router.get('/products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(StatusCodes.OK).json(products);
});

router.get('/product/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(StatusCodes.OK).json(product);
});

router.post('/product', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(StatusCodes.CREATED).json(newProduct);
});

router.delete('/product/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(StatusCodes.NO_CONTENT).json(products);
});

router.put('/product/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(StatusCodes.OK).json(products);
});

module.exports = router;