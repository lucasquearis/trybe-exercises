const Author = require('../models/Author');

const create = async (firstName, middleName, lastName) => {
  // Buscamos uma pessoa autora com o mesmo nome completo que desejamos criar
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  // Caso essa pessoa autora já exista, retornamos um objeto de erro informando
  // que não é possível criar a pessoa autora pois ele já existe
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  // Caso a pessoa autora não exista e, portanto, possa ser criado
  // chamamos o model e retornamos o resultado
  return Author.create(firstName, middleName, lastName);
};

const findById = async (id) => {
  // Solicitamos que o model realize a busca no banco
  const author = await Author.findById(id);

  // Caso nenhuma pessoa autora seja encontrada, retornamos um objeto de erro.
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }
  
  // Caso haja uma pessoa autora com o ID informado, retornamos essa pessoa
  return author;
};

const getAll = async () => Author.getAll();

module.exports = {
  create,
  findById,
  getAll,
};