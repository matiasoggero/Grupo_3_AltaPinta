const express = require("express");
const multer = require('multer');
const path = require('path');


const authMiddlewares = require('../middlewares/auth');
const productsController = require("../controllers/productsController");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-product${ext}`;
        cb(null, filename);
    }
});

const upload = multer({storage: storage})

const router = express.Router();

router.get("/productDetail", authMiddlewares.authUser,productsController.productDetail);

router.get("/products", productsController.productsShow);

router.get("/productCreation",authMiddlewares.authUser, productsController.productCreation);
router.post("/productCreation",upload.single("image"), productsController.productStore);

router.get("/detailOne/:id",authMiddlewares.authUser, productsController.detail);

router.get("/:id/edit", authMiddlewares.authUser, productsController.productEdition);
router.put("/:id/edit",authMiddlewares.authUser, productsController.productUpdate)
router.delete("/:id/delete",authMiddlewares.authUser, productsController.destroy);

module.exports = router;
