const { updateCount } = require("../../database/quiries");
const CustomError = require("../../utils/CustomError");

const updateProductCount = (req, res, next) => {
  const { newCount, id } = req.body;
  updateCount({ newCount, id })
    .then((count) => res.json(count))
    .catch((err) => next(new CustomError(err, 500)));
};
module.exports = updateProductCount;
