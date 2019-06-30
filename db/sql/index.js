const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    user: 'root',
    database: 'myBills'
  });
}

connection.connect(err => {
  err ? console.log(err) : console.log('connected to db');
});

module.exports = connection;
