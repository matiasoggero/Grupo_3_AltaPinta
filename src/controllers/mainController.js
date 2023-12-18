const controller = {
  index(req, res) {
    return res.render("index");
  },
};

// Middleware para verificar si el usuario está autenticado
function verificarAutenticacion(req, res, next) {
  if (req.isAuthenticated()) {
    next(); // Continuar si el usuario está autenticado
  } else {
    res.redirect("/login"); // Redirigir al login si el usuario no está autenticado
  }
}

module.exports = controller;
module.exports = verificarAutenticacion;
