const { addUser, userByEmail } = require("./user");
const { getProdcutsFromCart, deleteSingleProduct } = require("./cart");

const getFilteredProducts = require('./products');

module.exports = {
getFilteredProducts,
  addUser,
  userByEmail,
  getProdcutsFromCart,
  deleteSingleProduct,
};
