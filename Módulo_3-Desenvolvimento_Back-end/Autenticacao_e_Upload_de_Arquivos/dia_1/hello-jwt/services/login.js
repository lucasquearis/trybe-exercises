const jwt = require('jsonwebtoken');
const Joi = require('joi');

const mySecret = 'pass'

const isValidParams = (body) => {
  const { error } = Joi.object({
    username: Joi.string().required().min(5),
    password: Joi.string().required().min(5),
  }).validate(body);
  return error;
}

module.exports = (body) => {
  const error = isValidParams(body)
  if(error) throw error;
  const JWT_CONFIG = {
    expiresIn: '1h',
    algorithm: 'HS256',
  }

  const { username } = body;

  const token = jwt.sign({ username, admin: false }, mySecret, JWT_CONFIG)
  return { token };
};