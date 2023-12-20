function authUserInfo(req, res, next) {
  const loggedInUser = req.session.user;
  res.locals.loggedIn = Boolean(loggedInUser);
  if (loggedInUser) {
    res.locals.user = loggedInUser;
  }
  next();
}

function protectRoute(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/users/login"); // Redirigir al login si el usuario no está autenticado
  }
  next(); // Continuar si el usuario está autenticado
}

module.exports = {
  protectRoute,
  authUserInfo,
};
