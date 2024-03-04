const controller = {
  home(req, res) {
    return res.render("index");
  },

  quienesSomos (req, res)  {
   return res.render('quienesSomos');
  },
  
  contactanos (req, res){
    return res.render('contactanos');
  }
};


module.exports = controller;
