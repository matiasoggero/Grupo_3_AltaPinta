const { validationResult } = require('express-validator');
const db = require("../database/models/index");


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

  productCreation: async (req, res) => {
    try {
      // Obtener todas las categorías disponibles
      const categories = await db.Category.findAll();
      res.render("products/productCreation", { categories });
    } catch (error) {
      return res.json(error);
    }
  },

  productStore: async (req, res) => {
    try {
      const categories = await db.Category.findAll();
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // Si hay errores de validación, renderiza la vista con los errores y los valores ingresados por el usuario
        return res.render("products/productCreation", { errors: errors.mapped(), oldData: req.body, categories });
      }

      const image = req.file ? req.file.filename : "default-image.png";
      await db.Product.create({ ...req.body, image });

      return res.redirect('/products/products');
    } catch (error) {
      return res.json(error);
    }
  },

  productEdition: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id);
      const categories = await db.Category.findAll();
      
      return res.render('products/productEdition', { product, categories });
    } catch (error) {
      return res.json(error);
    }
  },

  productUpdate: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    const categories= await db.Category.findAll();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si hay errores de validación, renderiza la vista con los errores

      return res.render("products/productEdition",
      { errors: errors.mapped(), oldData: req.body, product, categories });
    }
    try {
      await db.Product.update({ ...req.body }, {
        where: {
          id: req.params.id
        }
      })
      return res.redirect('/products/products');
    } catch (error) {
      return res.json(error);
    }
  },

  detail: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id,
        {
          include: [{ association: "categories" }]
        });
      return res.render("products/detailOne", { product });

    } catch (error) {
      return res.json(error);
    }

  },

 


  destroy: async (req, res) => {
    try {
      await db.Product.destroy({
        where: {
          id: req.params.id
        }

      })
      return res.redirect("/products/products");
    } catch (error) {
      return res.json(error);
    }
  },

  finish: (req,res) => {
    res.render('products/productFinish');
  }
};

module.exports = controller;
