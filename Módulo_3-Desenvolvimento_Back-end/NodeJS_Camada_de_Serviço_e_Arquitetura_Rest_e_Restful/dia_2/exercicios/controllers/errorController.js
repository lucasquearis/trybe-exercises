const { StatusCodes } = require('http-status-codes');

const errorController = (err, _req, res, _next) => {
  if(err.statusCode) return res.status(err.statusCode).json(err.message);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
};

module.exports = {
  errorController,
}