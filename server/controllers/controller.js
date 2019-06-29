const model = require('../models/model.js');
const helpers = require('../helpers/apiHelpers.js');

module.exports = {
  getCompanies: (req, res) => {
    helpers.getCompanies().then(({ data }) => {
      res.send(data.results);
    });
  },
  addCompany: (req, res) => {
    helpers
      .addCompany(req.params.categoryId)
      .then(({ data }) => {
        console.log(data.results);
        res.send(data.results);
      })
      .catch(err => {
        console.log(err);
        res.send('fail');
      });
  }
};
