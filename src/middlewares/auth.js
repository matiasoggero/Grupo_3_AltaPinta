const { getRedirectRouteByRole } = require("../utils/users")

function authUserInfo(req, res, next) {
  const loggedInUser = req.session.user;
  res.locals.loggedIn = Boolean(loggedInUser);
  if (loggedInUser) {
    res.locals.user = loggedInUser;
  }
  next();
}

function authUser(req, res, next) {
  if (!req.session.user) {
      return res.redirect('/users/login');
  }
  next();
}

function onlyGuestUser(req,res,next){
  if(req.session.user){
    const routeToRedirect = getRedirectRouteByRole(req.session.user.roles_id)
    return res.redirect(routeToRedirect);
  }
  next(); 
}


module.exports = {
  authUser,
  authUserInfo,
  onlyGuestUser
}
