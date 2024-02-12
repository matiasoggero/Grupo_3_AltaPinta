const { body } = require('express-validator');

const validatorFormProduct = [
    body('name')
        .notEmpty().withMessage("Debes ingresar el nombre del ingrediente").bail()
        .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

    body('description').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),

    body('image').custom((value, { req }) => {
        if (req.files && req.files.image) {
            const imagen = req.files.image;
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            const extension = imagen.name.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                throw new Error('La imagen debe ser JPG, JPEG, PNG o GIF');
            }
        }
        return true; // Devolver true si no hay errores
    }),
    body('categoryId').notEmpty().withMessage("Debes seleccionar una categoría"),
    body('price')
        .notEmpty().withMessage("Debes ingresar un importe").bail()
        .isNumeric().withMessage('El precio debe ser un número')
        .custom((value, { req }) => {
            if (parseFloat(value) <= 0) {
                throw new Error('El precio debe ser mayor que cero');
            }
            return true;
        })
];

module.exports = { validatorFormProduct };