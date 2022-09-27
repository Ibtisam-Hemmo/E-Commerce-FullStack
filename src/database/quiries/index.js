const {
  addUser, userByEmail,
} = require('./user');
const { getProdcutsFromCart } = require('./cart');

module.exports = {
  addUser, userByEmail, getProdcutsFromCart,
};
