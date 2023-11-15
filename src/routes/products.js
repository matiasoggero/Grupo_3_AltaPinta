const express = require("express");
const multer = require('multer');
const path = require('path');



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

router.get("/productDetail", productsController.productDetail);

router.get("/products", productsController.productsShow);

router.get("/detailOne/:id", productsController.detail);

router.get("/productCreation", productsController.productCreation);
router.post("/productCreation",upload.single("image"), productsController.productStore);

router.get("/:id/edit", productsController.productEdition);
router.put("/:id/edit", productsController.productUpdate)


router.delete("/:id/delete", productsController.destroy);

module.exports = router;
