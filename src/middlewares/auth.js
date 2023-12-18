function protectRoute(req, res, next) {
  console.log(req.session);
  if (!req.session.user) {
    return res.redirect("/users/login"); // Redirigir al login si el usuario no está autenticado
  }
  next(); // Continuar si el usuario está autenticado
}
  
  module.exports = protectRoute;