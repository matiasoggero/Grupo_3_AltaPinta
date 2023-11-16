const {body} = require('express-validator');

const validatorFormRegister = [
    body('name').notEmpty().withMessage("Debes completar este campo"),
    body('email').isEmail().withMessage("Debes completar este campo"),
    body('date').notEmpty().withMessage("Debes completar este campo"),
    body('address').notEmpty().withMessage("Debes completar este campo"),
    body('phone').notEmpty().withMessage("Debes completar este campo")
];

module.exports = {
    validatorFormRegister
};