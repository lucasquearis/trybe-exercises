const { StatusCodes } = require('http-status-codes');
const { getCepService } = require('../services/getCepService');

const getCepController = async (req, res, next) => {
  const { cep } = req.params;
  try {
    const newCep = await getCepService(cep);
    res.status(StatusCodes.OK).json(newCep);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getCepController
};