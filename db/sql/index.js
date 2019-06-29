const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const db = mysql.createConnection({
  user: 'root',
  database: 'myBills'
});

db.connect(err => {
  err ? console.log(err) : console.log('connected to db');
});

module.exports = db;
