const { validationResult, body } = require('express-validator');

const validatorMiddleware = [
    body('hamburgerType').notEmpty().withMessage('Debes seleccionar el tipo de hamburguesa.'),
    body('breadType').notEmpty().withMessage('Debes seleccionar el tipo de pan.'),
    body('toppings').notEmpty().withMessage('Debes seleccionar al menos un aderezo.'),
    

    
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {validatorMiddleware};