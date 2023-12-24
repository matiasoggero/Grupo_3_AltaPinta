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



router.get("/products", productsController.productsShow);


router.post("/productCreation",upload.single("image"), productsController.productStore);

router.put("/:id/edit",authMiddlewares.authUser, productsController.productUpdate)
router.delete("/:id/delete",authMiddlewares.authUser, productsController.destroy);
router.get("/:id/edit", authMiddlewares.authUser, productsController.productEdition);
router.get("/detailOne/:id",authMiddlewares.authUser, productsController.detail);
router.get("/productDetail", authMiddlewares.authUser,productsController.productDetail);
router.get("/productCreation",authMiddlewares.authUser, productsController.productCreation);
router.put("/:id/edit",authMiddlewares.authUser, productsController.productUpdate)

module.exports = router;
