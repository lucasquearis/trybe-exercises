const mysql = require('mysql2/promise');

const connectionMySql = mysql.createPool({
  host: 'localhost',
  user: 'lucas',
  password: '12345678',
  database: 'model_example'
});

module.exports = connectionMySql;
