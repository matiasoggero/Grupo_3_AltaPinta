const controller = {
  home(req, res) {
    return res.render("index");
  },

  quienesSomos (req, res)  {
   return res.render('quienesSomos');
  } 
};


module.exports = controller;
