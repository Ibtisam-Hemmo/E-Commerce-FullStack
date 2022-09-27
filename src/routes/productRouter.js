const productRouter = require('express').Router();

const getProducts = require('../controllers/products');

productRouter.post('/product', getProducts);
module.exports = productRouter;
