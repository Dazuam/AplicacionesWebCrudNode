let router = require('express').Router();
let PagesController = require('../controllers/PagesController');
let ProductsController = require('../controllers/ProductsController');

router.get('/', PagesController.homepage);

router.get('/about', PagesController.about);

router.get('/products', PagesController.products);

router.get('/products/create', ProductsController.create);

router.get('/products/:id', ProductsController.show);

router.get('/products/:id/edit', ProductsController.edit);

router.post('/products', ProductsController.store);

router.put('/products/:id', ProductsController.update);

router.delete('/products/:id', ProductsController.delete);

module.exports = router;