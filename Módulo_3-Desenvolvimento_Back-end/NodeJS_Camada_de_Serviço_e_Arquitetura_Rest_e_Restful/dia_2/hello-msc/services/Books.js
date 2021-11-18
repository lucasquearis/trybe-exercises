const Books = require('../models/Books');

const getAll = async () => Books.getAll();

const findById = async (id) => {
  const book = await Books.findById(id);
  if(!book) return {
    error: {
      code: 'notFound',
      message: `não foi possível achar um livro com esse id: ${id}`,
    }
  }
  return book;
}

const create = async (title, author_id) => {
  const existingBook = await Books.findByName(title);
  if(existingBook) return {
    error: {
      code: 'alreadyExists',
      message: 'um livro com esse nome já está cadastrado'
    }
  }
  return Books.create(title, author_id);
}

module.exports = {
  getAll,
  findById,
  create,
}