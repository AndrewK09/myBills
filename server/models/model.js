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
    let sql = `INSERT INTO bills (companyID, amount)
                VALUES (
                  (SELECT id FROM companies WHERE companyName = ?),
                    ?)`;
    db.query(sql, [companyName, amount], callback);
  },
  getBills: ({ companyName }, callback) => {
    let sql = `SELECT c.companyName, b.amount, b.datePaid 
                FROM bills b INNER JOIN companies c
                  ON c.id = b.companyId
                    WHERE c.companyName = ?`;
    db.query(sql, [companyName], callback);
  }
};
