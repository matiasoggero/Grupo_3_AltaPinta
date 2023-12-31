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
    return res.redirect("/users/profile");
  }
  next(); 
}


module.exports = {
  authUser,
  authUserInfo,
  onlyGuestUser
}
