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


module.exports = {
  authUser,
  authUserInfo,
};
