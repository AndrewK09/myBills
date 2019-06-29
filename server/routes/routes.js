const router = require('express').Router();
const controller = require('../controllers/controller.js');

router.get('/companies', controller.getCompanies);
router.post('/companies', controller.addCompany);
router.get('/bills', controller.getAllBills);
router.get('/bills/sort/:col/:order', controller.getAllBillsSorted);
router.post('/bills', controller.addBill);
router.get('/bills/:companyName', controller.getBills);

module.exports = router;
