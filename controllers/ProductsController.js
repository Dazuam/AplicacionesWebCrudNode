let ProductModel = require('../models/Product')

exports.create = (req, res) => {
    res.render('products/create');
};

exports.store = (req, res) => {
  let product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  };
  ProductModel.create(product)
    .then((id) => {
      res.redirect('/products');
    });
};

exports.show = (req, res) => {
    let id = req.params.id;
    
    ProductModel.find(id).then((product) => {
      if (product == null) {
        res.status(404).send('Not found');
        return;
      }

      res.render('products/show', {product: product});
    });
};