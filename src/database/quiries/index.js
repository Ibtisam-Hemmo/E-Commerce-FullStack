const { addUser, userByEmail } = require("./user");
const { getProdcutsFromCart, deleteSingleProduct } = require("./cart");

const { getFilteredProducts, addToCart } = require("./products");

module.exports = {
  getFilteredProducts,
  addToCart,
  addUser,
  userByEmail,
  getProdcutsFromCart,
  deleteSingleProduct,
};
