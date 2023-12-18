const express = require("express");
const router = express.Router();
const protectRoute = require("../middlewares/auth");

// Rutas de huéspedes: redireccionar al perfil si el usuario está logueado
router.get("/productDetail", protectRoute, (req, res) => {
  if (req.session.user) {
    return res.redirect("/login"); // Redirigir al perfil si el usuario está logueado
  }
});

module.exports = router;
