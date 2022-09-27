const connection = require('../config/connection');

const getProdcutsFromCart = (user_id) => {
  const sql = 'select users.id ,products.*,cart.count from cart left join users on users.id=cart.user_id left join products on products.id=cart.product_id where cart.user_id=$1';
  return connection.query(sql, [user_id]);
};

module.exports = {
  getProdcutsFromCart,
};
