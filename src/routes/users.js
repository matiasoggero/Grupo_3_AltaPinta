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

const upload = multer({ storage });

const router = express.Router();

router.get("/login",authMiddlewares.onlyGuestUser, usersController.login,);
router.post("/login", usersController.loginProcess);
router.get("/logout", usersController.logout);

router.get("/register",authMiddlewares.onlyGuestUser, usersController.register);

router.post("/register", upload.single("avatar"), usersController.create);
router.post("/register", validatorFormRegister, usersController.create); //ver esta línea
router.get("/profile", authMiddlewares.authUser, usersController.profile);
router.get("/", usersController.list);
router.get("/:id", usersController.detail);

router.get("/:id/edit",authMiddlewares.authUser, usersController.edit);
router.put("/:id/edit",authMiddlewares.authUser, usersController.update);
router.delete("/:id/delete",authMiddlewares.authUser, usersController.delete);
router.get("/admin", authMiddlewares.authUser,usersController.admin);








module.exports = router;
