const router = require('express').Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/products.controller');

router.post('/', createProduct ) 

router.get('/',  getProducts) 

router.put('/:id', updateProduct) 

router.delete('/:id', deleteProduct) 

module.exports = router;
