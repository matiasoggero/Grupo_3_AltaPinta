const controller = {
  home(req, res) {
    return res.render("index");
  },

  quienesSomos (req, res)  {
   return res.render('quienesSomos');
  },
  
  contactanos (req, res){
    return res.render('contactanos');
  },

  trabajaConNosotros(req, res){
    return res.render("trabajaConNosotros");
  },

  franquicias(req, res){
    return res.render("franquicias");
  }

};


module.exports = controller;
