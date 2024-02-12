const db = require("../database/models/index");
const { validationResult } = require('express-validator');

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
      const categoriesForCreate = await db.Category.findAll();
      res.render("products/productCreation", { categories: categoriesForCreate });
    } catch (error) {
      return res.json(error);
    }
  },

  productStore: async (req, res) => {
    const categoriesForStore = await db.Category.findAll();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si hay errores de validación, renderiza la vista con los errores
      
      return res.render("products/productCreation", { errors: errors.array(), categories: categoriesForStore });
    }
    try {
      await db.Product.create({
        ...req.body,
        image: req.file?.filename || "default-image.png"
      });
      return res.redirect('/products/products');
    } catch (error) {
      // Maneja otros errores que no estén relacionados con la validación
      return res.json(error);
    }
  },

  productEdition: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id);
      const categoriesForEdit = await db.Category.findAll();
      return res.render('products/productEdition', { categories: categoriesForEdit, product });
    } catch (error) {
      return res.json(error);
    }
  },

  productUpdate: async (req, res) => {
    const productUpdate = await db.Product.findByPk(req.params.id);
    const categoriesForUpdate = await db.Category.findAll();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si hay errores de validación, renderiza la vista con los errores
      
      return res.render("products/productEdition", 
      { errors: errors.mapped(), categories: categoriesForUpdate, product: productUpdate });
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
};

module.exports = controller;
