const serviceUsers = require('../services');

module.exports = (req, res, next) => {
  const { headers: { authorization } } = req;
  try {
    const response = serviceUsers.users(authorization);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
