const { getProdcutsFromCart } = require('../../database/quiries');

const getProductsCart = (req, res) => {
  getProdcutsFromCart(1).then((data) => res.json(data.rows));
};
module.exports = getProductsCart;
