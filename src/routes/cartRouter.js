const cartRouter = require("express").Router();

const { getProductsCart } = require("../controllers/cart");

cartRouter.get("/api/v1/cart/get-product", getProductsCart);

module.exports = cartRouter;
