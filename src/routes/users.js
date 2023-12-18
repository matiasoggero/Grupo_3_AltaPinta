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

<<<<<<< HEAD
router.get("/:id", usersController.detail);

router.get("/:id/edit", usersController.edit);
router.put("/:id/edit", usersController.update);

router.get("/profile", usersController.profile);
=======
router.get('/profile', usersController.profile);
router.get('/:id', usersController.detail);
router.get('/:id/edit', usersController.edit);
router.put('/:id/edit', usersController.update);

>>>>>>> ae01145f5969e23ba79f1d08dd25989619e7c5ab

router.get("/admin", protectRoute, usersController.admin);
router.get("/products/productDetail", protectRoute, usersController.login);

// Ruta de huéspedes: redireccionar al perfil si el usuario está logueado
router.get("/productDetail", protectRoute, (req, res, next) => {
  if (req.session.user) {
    return res.redirect("/profile"); // Redirigir al perfil si el usuario está logueado
  }
  next(); // Continuar si el usuario no está autenticado
});

// Ruta de usuarios: redireccionar al login si el usuario no está logueado
router.get(
  "/productDetail",
  (req, res, next) => {
    if (!req.session.user) {
      return res.redirect("/users/login"); // Redirigir al login si el usuario no está logueado
    }
    next();
  },
  (req, res) => {
    // Lógica para la ruta de usuarios si es necesario
    res.send("Bienvenido, usuario");
  }
);

module.exports = router;
