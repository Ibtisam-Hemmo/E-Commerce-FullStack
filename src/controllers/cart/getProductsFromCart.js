const { getProdcutsFromCart } = require("../../database/quiries");

const getProductsCart = (req, res) => {
  getProdcutsFromCart(req.user.id).then((data) => res.json(data.rows));
};
module.exports = getProductsCart;
