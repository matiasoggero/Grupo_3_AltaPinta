const express = require("express");

const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/productDetail", productsController.productDetail);
router.get("/products", productsController.productsShow);
router.get("/productCreation", productsController.productCreation);
router.post("/productCreation", productsController.productStore);
router.get("/productEdition", productsController.productEdition);
router.get("/detailOne/:id", productsController.detail);
router.delete("/:id/delete", productsController.destroy);

module.exports = router;
