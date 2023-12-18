const express = require("express");
const router = express.Router();
const mainController = require("./mainController");

// Rutas accesibles por cualquiera (sin cambios)
router.get("/register", (req, res) => {});
router.get("/index", (req, res) => {});
router.get("/login", (req, res) => {});

// Rutas accesibles solo sin login → redirigen al perfil
router.get("/userDetail", mainController.verificarAutenticacion, (req, res) => {
  res.redirect("/login"); // Redirigir al login si uno no está logueado
});
router.get("/users", mainController.verificarAutenticacion, (req, res) => {
  res.redirect("/login");
});
router.get("/edit", mainController.verificarAutenticacion, (req, res) => {
  res.redirect("/login");
});
router.get("/profile", mainController.verificarAutenticacion, (req, res) => {
  res.redirect("/login");
});

// Rutas accesibles solo con login de usuario→ redireccionan al login
router.get("/admin", (req, res) => {
  // Esta ruta redirigirá al login si el usuario no está autenticado.
});

module.exports = router;
