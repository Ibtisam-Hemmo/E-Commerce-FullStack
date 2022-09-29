const { totalPriceQuery } = require("../../database/quiries");
const CustomError = require("../../utils/CustomError");

const calculateTotalPrice = (req, res, next) => {
  console.log("total controller: ", req.user.id);
  totalPriceQuery(req.user.id)
    .then(({ rows }) => {
      res.json(rows[0].total_price);
    })
    .catch((err) => next(new CustomError(err, 500)));
};
module.exports = calculateTotalPrice;
