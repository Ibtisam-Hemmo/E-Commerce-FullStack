const { deleteSingleProduct } = require("../../database/quiries");

const deleteProductById = (req, res) => {
  const { id } = req.body;
  deleteSingleProduct(id);
};
module.exports = deleteProductById;
