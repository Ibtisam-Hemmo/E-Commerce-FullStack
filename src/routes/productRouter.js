const productRouter = require("express").Router();
const { getProducts, addToCartCon } = require("../controllers/products");

productRouter.post("/product", getProducts);
productRouter.post("/addToCart", addToCartCon);

module.exports = productRouter;
