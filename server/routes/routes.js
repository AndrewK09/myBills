const router = require('express').Router();
const controller = require('../controllers/controller.js');

router.get('/companies', controller.getCompanies);
router.post('/companies', controller.addCompany);
router.post('/bills', controller.addBill);
router.get('/bills/:company', controller.getBills);

module.exports = router;
