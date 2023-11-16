const express = require ('express');
const multer = require('multer');
const path = require('path');
const {body} = require('express-validator');

const usersController = require('../controllers/usersController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/avatar'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-usuario${ext}`;
        cb(null, filename);
    }
});

const validatorForm = [
    body('name').notEmpty().withMessage("Debes completar este campo"),
    body('email').isEmail().withMessage("Debes completar este campo"),
    body('date').notEmpty().withMessage("Debes completar este campo"),
    body('address').notEmpty().withMessage("Debes completar este campo"),
    body('phone').notEmpty().withMessage("Debes completar este campo")
];

const upload = multer({storage});

const router = express.Router();

router.get('/login', usersController.login);
//router.post('/login', usersController.login);
router.get('/register',usersController.register);
router.post('/register',upload.single('avatar'),usersController.create);
router.post('/register',validatorForm,usersController.create);//ver esta línea
router.delete('/:id/delete',usersController.delete);
router.get('/admin',usersController.admin);
router.get('/', usersController.list);
router.get('/:id',usersController.detail);
router.get('/:id/edit', usersController.edit);
router.put('/:id/edit', usersController.update);

module.exports = router;