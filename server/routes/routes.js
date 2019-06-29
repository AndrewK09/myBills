const router = require('express').Router();
const controller = require('../controllers/controller.js');

router.get('/companies', controller.getCompanies);
router.post('/companies', controller.addCompany);

module.exports = router;
