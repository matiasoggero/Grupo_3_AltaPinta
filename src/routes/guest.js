const express = require("express");
const router = express.Router();
const protectRoute = require("../middlewares/auth").protectRoute;

router.get("/products/:id", protectRoute, (req, res) => {
  res.render("products/productDetail");
});

module.exports = router;
