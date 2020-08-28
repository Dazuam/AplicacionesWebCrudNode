let router = require('express').Router();
let PagesController = require('../controllers/PagesController');
let ProductsController = require('../controllers/ProductsController');

router.get('/', PagesController.homepage);

router.get('/about', PagesController.about);

router.get('/products', PagesController.products);

router.get('/products/create', ProductsController.create);

router.post('/products', ProductsController.store);

module.exports = router;