const connection = require("../config/connection");

const getFilteredProducts = (name, minPrice, maxPrice, category, pageNum) => {
  const sql = {
    text: "select *,(select count(products.*) from products  where name ilike $1 and price between $2 and $3 and category ilike $4 ) from products  where name ilike $1 and price between $2 and $3 and category ilike $4 offset $5 limit 6;",
    values: [name, minPrice, maxPrice, category, pageNum],
  };

  return connection.query(sql);
};

const addToCart = (user_id, product_id) => {
  const sql = {
    text: "Insert into cart (user_id, product_id, count ) values ($1, $2, 1)",
    values: [user_id, product_id],
  };
  return connection.query(sql);
};
module.exports = {
  getFilteredProducts,
  addToCart,
};
