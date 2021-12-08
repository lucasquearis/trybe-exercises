const serviceLogin = require('../services');

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  try {
    const serviceLoginStatus = serviceLogin.login(username, password);
    res.status(200).json(serviceLoginStatus);
  } catch (error) {
    next(error);
  }
};