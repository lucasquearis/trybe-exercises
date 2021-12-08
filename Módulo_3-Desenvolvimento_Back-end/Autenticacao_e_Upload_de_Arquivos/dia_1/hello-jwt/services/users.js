const jwt = require('jsonwebtoken');

const mySecret = 'pass'

const isValidToken = (token) => {
  if(!token) throw { error: { message: "Token not found" } }
  return true;
}

module.exports = (token) => {
  isValidToken(token);
  const { username, admin} = jwt.verify(token, mySecret);
  return { username, admin };
};