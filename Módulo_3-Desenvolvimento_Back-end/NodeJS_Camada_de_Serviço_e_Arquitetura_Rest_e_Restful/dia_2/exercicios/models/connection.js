const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'lucas',
  password: '12345678',
  host: 'localhost',
  database: 'cep_lookup',
});

module.exports = connection;
