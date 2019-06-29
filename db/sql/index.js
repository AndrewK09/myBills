const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection({
  user: 'root',
  database: 'myBills'
});

const db = mysql.connect(err => {
  err ? console.log(err) : console.log('connected to db');
});

module.exports = db;
