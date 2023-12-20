const express = require("express");
const router = express.Router();
const protectRoute = require("../middlewares/auth").protectRoute;

router.get("/products/productDetail", protectRoute, (req, res) => {
  if (req.session.user) {
    return res.redirect("/users/login"); // Si está logueado, redirigir al login
  }
  res.render("profile"); // Si no está logueado, redirigir al perfil
});

router.get("/users/edit", (req, res) => {
  if (req.session.user) {
    return res.redirect("/users/login"); // Si está logueado, redirigir al login
  }
  res.render("profile"); // Si no está logueado, redirigir al perfil
});

router.get("/users/userDetail", (req, res) => {
  if (req.session.user) {
    return res.redirect("/users/login"); // Si está logueado, redirigir al login
  }
  res.render("profile"); // Si no está logueado, redirigir al perfil
});

module.exports = router;
