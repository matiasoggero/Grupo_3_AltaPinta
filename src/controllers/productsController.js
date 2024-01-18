const db = require('../../models');

const controller = {
  productDetail(req, res) {
    return res.render("products/productDetail");
  },

  productsShow: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      return res.render("products/products", { products });
    } catch (error) {
      res.json(error)
    }
  },

  productCreation: (req, res) => {
    res.render("products/productCreation");
  },

  productStore: async (req, res) => {
    try {
      await db.Product.create({
        ...req.body,
        image: req.file?.filename || "default-image.png"
      });
      return res.redirect('/products/products');
    } catch (error) {
      return res.json(error);
    }
  },

  productEdition: async (req, res) => {
    try {
      const product = await db.Product.findByPK(req.params.id);
      return res.render('products/productEdition', { productToEdit: product });
    } catch (error) {
      return res.json(error);
    }
  },

  productUpdate: async (req, res) => {
    try {
      await db.Product.update(req.body, {
        where: req.params.id
      })
      return res.redirect('/products/products');
    } catch (error) {
      return res.json(error);
    }
  },

  detail: async (req, res) => {
    try {
      const product = await db.Products.findByPK(req.params.id);
      return res.render("products/detailOne", { product });

    } catch (error) {
      return res.json(error);
    }

  },

  destroy: async (req, res) => {
    try {
      await db.Product.destroy({
        where: req.body.id
      })
      return res.redirect("/products/products");
    } catch (error) {
      return res.json(error);
    }
  },
};

module.exports = controller;
