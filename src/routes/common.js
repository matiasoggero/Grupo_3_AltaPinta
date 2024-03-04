const express = require ('express');
const router = express.Router();
const commonController = require('../controllers/commonController');

router.get('/', commonController.home);
router.get("/quienesSomos",commonController.quienesSomos);
router.get("/contactanos", commonController.contactanos);

module.exports = router;

