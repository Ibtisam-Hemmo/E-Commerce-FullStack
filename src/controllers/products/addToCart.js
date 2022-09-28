const { addToCart } = require("../../database/quiries");

const addToCartCon = (req, res, next) => {
  const { user_id, product_id } = req.body;
  addToCart(user_id, product_id)
    .then((data) => res.json({ message: "Added to Cart successfully" }))
    .catch(console.log);
};
module.exports = addToCartCon;
