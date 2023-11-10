const express = require("express");

const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/productDetail", productsController.productDetail);
router.get("/productCreation", productsController.productCreation);
router.get("/productEdition", productsController.productEdition);
router.get("/detail/:id", productsController.detail);
router.delete("/:id/delete", productsController.destroy);

module.exports = router;
