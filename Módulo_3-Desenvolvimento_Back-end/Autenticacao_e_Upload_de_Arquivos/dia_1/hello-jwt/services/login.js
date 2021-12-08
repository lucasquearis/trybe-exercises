const jwt = require('jsonwebtoken');
const Joi = require('joi');

const mySecret = 'pass'

const isValidParams = (username, password) => {
  const { error } = Joi.object({
    username: Joi.string().required().min(5),
    password: Joi.string().required().min(5),
  }).validate({ username, password });
  return error;
}

const isAdmin = (username, password) => {
  return (username === 'admin' && password === 's3nh4S3gur4???') ? true : false
}

module.exports = (username, password) => {
  
  const error = isValidParams(username, password)
  if(error) throw error;
  const JWT_CONFIG = {
    expiresIn: '1h',
    algorithm: 'HS256',
  }
  const token = jwt.sign({ username, admin: isAdmin(username, password) }, mySecret, JWT_CONFIG)
  return { token };
};