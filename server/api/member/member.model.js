var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'shipdb',
  multipleStatements: 'true'
});


var model = {};

model.getModels = function(table, queryParameter, callback) {
  
  var sql = 'SELECT * FROM ' + table;
  pool.getConnection(function(error, connection) {
    if (error) {
      console.log(error);
      callback(error);
      return;
    }

    connection.query(sql, queryParameter, function(error, row) {
      connection.release();
      if (error) {
        callback(error);
      } else {
        callback(null, row);
      }
    });
  });
};

module.exports = model;