// controllers/ProductsController.js
// Reglas para la respuesta para la petición "/products/create"
let ProductModel = require('../models/Product')

exports.create = (req, res) => {
    res.render('products/create');
  }
  
  // Almacena el producto
  exports.store = (req, res) => {
    console.log(req.body);
    res.send('Producto almacenado');
  }