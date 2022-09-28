const { getFilteredProducts } = require('../../database/quiries');

const getProducts = (req, res, next) => {
  let { search, category, minPrice, maxPrice, offset} = req.body;

  if (category === 'all') category = '';
  search = search.trim(); search = `%${search}%`;
  category = category.trim(); category = `%${category}%`;

  getFilteredProducts(search, minPrice, maxPrice, category, offset)
    .then((data) => res.send(data))
    .catch(console.log);
};
module.exports = getProducts;
