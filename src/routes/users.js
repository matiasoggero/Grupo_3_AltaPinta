const express = require ('express');
const multer = require('multer');
const path = require('path');

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

const upload = multer({storage})

const router = express.Router();

router.get('/login', usersController.login);
//router.post('/login', usersController.login);
router.get('/register',usersController.register);
router.post('/register',upload.single('avatar'),usersController.create);
//router.delete('???',usersController.delete);
router.get('/admin',usersController.admin);

module.exports = router;