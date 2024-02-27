const db = require('../../database/models/index');

const controller = {
    productsShow: async (req, res) => {
        try {
            const data = await db.Product.findAll({ include: ["categories"],attributes:{exclude:['categories_id']}});
            const category = await db.Category.findAll();

            const products = data.map(product => ({...product.dataValues,
                detail: `/api/product/${product.id}`}))

            return res.send({
                count: data.length,
                countByCategory: category.length,
                products
            });
        } catch (error) {
            return res.json(error);
        }
    },
    detail: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id, { include: ["categories"],
            attributes:{exclude:['categories_id']}});

            return res.send(product);

        } catch (error) {
            return res.json(error);
        }

    }
}

module.exports = controller;