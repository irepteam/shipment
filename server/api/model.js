var mysql = require('mysql');
exports.pool = mysql.createPool({
  host: 'localhost',
  user: 'shipuser',
  password: 'password',
  database: 'shipdb',
  multipleStatements: 'true'
});
