const controller = {
    index(req, res){
        return res.render('index');
    },
    productDetail(req, res){
        return res.render('productDetail');
    }
}
module.exports =controller;