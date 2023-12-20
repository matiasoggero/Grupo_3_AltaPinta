const express = require("express");
const multer = require("multer");
const path = require("path");
const { validatorFormRegister } = require("../middlewares/userValidator");

const usersController = require("../controllers/usersController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/avatar"));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-usuario${ext}`;
    cb(null, filename);
  },
});

const authMiddlewares = require("../middlewares/auth");
const protectRoute = require("../middlewares/auth");

const upload = multer({ storage });

const router = express.Router();

router.get("/login", usersController.login);
router.post("/login", usersController.loginProcess);

router.get("/logout", usersController.logout);

router.get("/register", usersController.register);
router.post("/register", upload.single("avatar"), usersController.create);
router.post("/register", validatorFormRegister, usersController.create); //ver esta línea

router.delete("/:id/delete", usersController.delete);

router.get("/admin", usersController.admin);

router.get("/", usersController.list);

router.get("/:id", usersController.detail);

router.get("/:id/edit", usersController.edit);
router.put("/:id/edit", usersController.update);

router.get("/profile", usersController.profile);

// router.get("/profile", authMiddlewares.protectRoute, usersController.profile);

module.exports = router;
