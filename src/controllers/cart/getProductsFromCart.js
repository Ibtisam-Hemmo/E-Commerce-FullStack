const { getProdcutsFromCart } = require("../../database/quiries");

const getProductsCart = (req, res) => {
  // const { user_id: id } = req.user;
  console.log("User ID to Get Cart Products: ", req.user.id);
  getProdcutsFromCart(req.user.id).then((data) => res.json(data.rows));
};
module.exports = getProductsCart;
