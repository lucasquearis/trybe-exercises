const { StatusCodes } = require("http-status-codes");
const { getCepModel } = require('../models/getCepModel.js');

const invalidCepError = {
  statusCode: StatusCodes.BAD_REQUEST,
  code: "invalidData",
  message: "CEP inválido"
};

const notFoundCepError = {
  statusCode: StatusCodes.NOT_FOUND,
  code: "notFound",
  message: "CEP não encontrado",
}

const validateCep = (cep) => {
  const rgxCep = /\d{5}-?\d{3}/;
  return rgxCep.test(cep);
}

const getCepService = async (cep) => {
  const validCep = validateCep(cep);
  if(!validCep) throw invalidCepError;
  const getCep = await getCepModel(cep);
  if (!getCep) throw notFoundCepError;
  return getCep;
};

module.exports = {
  getCepService,
};