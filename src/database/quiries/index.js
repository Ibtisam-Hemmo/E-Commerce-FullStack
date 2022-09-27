const {
  addUser, userByEmail,
} = require('./user');

const getFilteredProducts = require('./products');

module.exports = {
  addUser, userByEmail, getFilteredProducts,
};
