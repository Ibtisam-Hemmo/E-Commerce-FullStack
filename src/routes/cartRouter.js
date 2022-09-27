const cartRouter = require("express").Router();

const { getProductsCart, deleteProductById } = require("../controllers/cart");

cartRouter.get("/api/v1/cart/get-product", getProductsCart);
cartRouter.post("/api/v1/cart/delete-product", deleteProductById);

module.exports = cartRouter;
