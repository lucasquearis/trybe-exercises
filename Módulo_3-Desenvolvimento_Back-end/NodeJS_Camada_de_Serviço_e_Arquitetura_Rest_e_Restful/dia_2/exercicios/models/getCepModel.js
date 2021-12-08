const connection = require('./connection');

const getCepModel = async (cep) => {
  console.log('chegou no model', cep)
  const [cepResult] = await connection.execute(
    `SELECT * FROM ceps WHERE cep = ?`,
    [cep]
  )
    .then((result) => result);
  if(!cepResult) return null
  return cepResult[0];
}

module.exports = {
  getCepModel,
}