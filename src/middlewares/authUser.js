
function authUser(req, res, next) {
    const users = ['diego maradona'];
    const isUser = users.some((element) => element.toLowerCase() === req.query.user?.toLowerCase());
  
    if (isUser) {
      return res.redirect('/index'); 
    }
    return res.redirect ('/login')
  }
  
  module.exports = authUser;