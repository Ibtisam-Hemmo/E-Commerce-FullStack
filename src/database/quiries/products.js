const connection = require('../config/connection');

const getFilteredProducts = (name, minPrice, maxPrice, category) => {
  const sql = {
    text: 'select * from products where name ilike $1 and price between $2 and $3 and category ilike $4',
    values: [name, minPrice, maxPrice, category],
  };
  return connection.query(sql);
};
module.exports = getFilteredProducts;
