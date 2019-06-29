const db = require('../../db/sql');

// const mongoDb = require('../../db/mongodb');

module.exports = {
  getCompanies: callback => {
    let sql = 'SELECT * FROM companies';
    db.query(sql, callback);
  },
  addCompany: ({ companyName }, callback) => {
    let sql = 'INSERT INTO companies (companyName) VALUES (?)';
    db.query(sql, [companyName], callback);
  },
  addBill: ({ companyName, amount }, callback) => {
    let date = generateDate();
    let sql = `INSERT INTO bills (companyID, amount, datePaid)
                VALUES (
                  (SELECT id FROM companies WHERE companyName = ?),
                    ?, ?)`;
    db.query(sql, [companyName, amount, date], callback);
  },
  getAllBills: callback => {
    let sql = `SELECT b.id, c.companyName, b.amount, b.datePaid 
                FROM bills b INNER JOIN companies c
                 ON c.id = b.companyId`;
    db.query(sql, callback);
  },
  getBills: ({ companyName }, callback) => {
    let sql = `SELECT c.companyName, b.amount, b.datePaid 
                FROM bills b INNER JOIN companies c
                  ON c.id = b.companyId
                    WHERE c.companyName = ?`;
    db.query(sql, [companyName], callback);
  }
};

var generateDate = () => {
  let date = new Date().toString();
  return date.substring(4, 15);
};
