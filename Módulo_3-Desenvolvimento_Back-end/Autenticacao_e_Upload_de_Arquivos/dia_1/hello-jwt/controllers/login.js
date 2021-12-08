const serviceLogin = require('../services');

module.exports = (req, res, next) => {
  try {
    const serviceLoginStatus = serviceLogin.login(req.body);
    res.status(200).json(serviceLoginStatus);
  } catch (error) {
    next(error);
  }
};