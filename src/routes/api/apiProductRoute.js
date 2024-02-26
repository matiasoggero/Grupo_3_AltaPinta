const express = require('express');
const router = express.Router();

const apiProduct = require('../../controllers/api/apiProductController');

router.get("/", apiProduct.productsShow);
router.get("/:id", apiProduct.detail);

module.exports = router;