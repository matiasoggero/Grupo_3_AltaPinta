const controller = {
    productDetail(req, res){
        return res.render('products/productDetail');
    },
    productCreation(req,res){
        return res.render('products/productCreation');
    },
    productEdition(req,res){
        return res.render('products/productEdition');
    }
}

module.exports =controller;