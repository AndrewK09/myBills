const model = require('../models/model.js');

const handleErr = (err, res) => {
  console.log(err);
  res.sendStatus(500);
};

module.exports = {
  getCompanies: (req, res) => {
    model.getCompanies((err, result) => {
      err ? handleErr(err, res) : res.send(result);
    });
  },
  addCompany: (req, res) => {
    model.addCompany(req.body, (err, result) => {
      err ? handleErr(err, res) : res.send('Added company');
    });
  },
  addBill: (req, res) => {
    model.addBill(req.body, (err, result) => {
      err ? handleErr(err, res) : res.send('Added Bill');
    });
  },
  getBills: (req, res) => {
    mode.getBills(req.body.company, (err, result) => {
      err ? handleErr(err, res) : res.send(result);
    });
  }
};
