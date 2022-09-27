const { getFilteredProducts } = require('../../database/quiries');

const getProducts = (req, res, next) => {
  let {
    name, minPrice, maxPrice, category,
  } = req.body;
  name = name.trim();
  name = `%${name}%`;
  category = category.trim();
  category = `%${category}%`;

  getFilteredProducts(name, minPrice, maxPrice, category)
    .then((data) => res.send(data))
    .catch(console.log);
};
module.exports = getProducts;
