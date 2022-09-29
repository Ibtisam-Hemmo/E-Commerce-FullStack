const cartRouter = require("express").Router();
const verifyToken = require("../utils/verifyToken");

const {
  getProductsCart,
  deleteProductById,
  updateProductCount,
  calculateTotalPrice,
} = require("../controllers/cart");

cartRouter.get("/api/v1/cart/get-product", verifyToken, getProductsCart);
cartRouter.post("/api/v1/cart/delete-product", deleteProductById);
cartRouter.post("/api/v1/cart/update-product", updateProductCount);
cartRouter.get("/api/v1/cart/get-totalPrice", verifyToken, calculateTotalPrice);

module.exports = cartRouter;
