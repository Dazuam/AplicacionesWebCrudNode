// controllers/ProductsController.js
// Reglas para la respuesta para la petición "/products/create"
exports.create = (req, res) => {
    res.render('pages/create');
  }
  
  // Almacena el producto
  exports.store = (req, res) => {
    console.log(req.body);
    res.send('Producto almacenado');
  }