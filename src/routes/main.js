const express = require ('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/products/productDetail', mainController.productDetail);

module.exports = router;