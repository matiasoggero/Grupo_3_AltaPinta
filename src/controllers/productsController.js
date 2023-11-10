const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  productDetail(req, res) {
    return res.render("products/productDetail");
  },
  productCreation(req, res) {
    return res.render("products/productCreation");
  },
  productEdition(req, res) {
    return res.render("products/productEdition");
  },
  detail: (req, res) => {
    const product = products.find((product) => product.id == req.body.id);
    res.render("detail", { product });
  },
  destroy: (req, res) => {
    const indexProduct = products.findIndex(
      (product) => product.id == req.body.id
    );
    products.splice(indexProduct, 1);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    res.redirect("/products");
  },
};

module.exports = controller;
