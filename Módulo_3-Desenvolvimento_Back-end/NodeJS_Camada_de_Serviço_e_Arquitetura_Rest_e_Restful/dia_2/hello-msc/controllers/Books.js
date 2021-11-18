const rescue = require('express-rescue');
const service = require('../services/Books');
const Joi = require('joi');

const getAll = rescue(async (req, res) => {
  const books = await service.getAll();

  res.status(200).json(books)
})

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const book = await service.findById(id);
  if(book.error) return next(book.error);
  res.status(200).json(book);
})

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().not().empty().required()
  })
    .validate(req.body);
  if(error) return next(error);
  const { title, author_id } = req.body;
  const newBook = await service.create(title, author_id);
  if(newBook.error) return next(newBook.error);
  res.status(201).json(newBook);
})

module.exports = {
  getAll,
  findById,
  create
}