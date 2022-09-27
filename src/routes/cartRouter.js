const cartRouter = require("express").Router();

const { getProductsCart, deleteProductById, updateProductCount } = require("../controllers/cart");

cartRouter.get("/api/v1/cart/get-product", getProductsCart);
cartRouter.post("/api/v1/cart/delete-product", deleteProductById);
cartRouter.put("/api/v1/cart/update-product", updateProductCount);

module.exports = cartRouter;
