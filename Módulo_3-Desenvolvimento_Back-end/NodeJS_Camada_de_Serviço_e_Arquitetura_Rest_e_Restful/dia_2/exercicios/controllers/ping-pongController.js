const { StatusCodes } = require('http-status-codes');

const pingPongController = (_req, res, next) => {
  try {
    res.status(StatusCodes.OK).json({ message: "pong!" });  
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingPongController,
}