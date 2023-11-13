const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  productDetail(req, res) {
    return res.render("products/productDetail");
  },

  productsShow: (req, res) => {
    res.render("products/products", { products });
  },

  productCreation: (req, res) => {
    res.render("products/productCreation");
  },

  productStore: (req, res) => {
    const newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: req.file?.filename || "default-image.png"
    };
    products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products/products');
  },

  productEdition(req, res) {
    return res.render("products/productEdition");
  },

  detail: (req, res) => {
    const product = products.find((product) => product.id == req.params.id);
    res.render("products/detailOne", { product });
    
  },

  destroy: (req, res) => {
    const indexProduct = products.findIndex(
      (product) => product.id == req.body.id
    );
    products.splice(indexProduct, 1);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    res.redirect("/products/products");
  },
};

module.exports = controller;
