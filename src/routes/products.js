const express = require ('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/productDetail', productsController.productDetail);
router.get('/productCreation', productsController.productDetail);
router.get('/productEdition', productsController.productDetail);

module.exports = router;