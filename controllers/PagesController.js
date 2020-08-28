let ProductModel = require('../models/Product');

exports.homepage = (req, res) => {
    res.render('pages/homepage');
}

exports.about = (req, res) => {
    res.render('pages/about');
}

exports.create = (req, res) => {
    res.render('products/create');
}

exports.products = (req, res) => {
    ProductModel.all()
        .then((data) =>{
            let products = data;
            console.log(products);
            res.render('pages/products', {products: products});
        });
}