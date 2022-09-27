const { updateCount } = require("../../database/quiries");
const CustomError = require('../../utils/CustomError');

const updateProductCount = (req, res, next) => {
    const { id: cart_id, newCount } = req.body;
    console.log('UODATED DATA: ', req.body);

    updateCount({ newCount, cart_id })
        .then((count) => res.json(count.rows[0]))
        .catch(err => next(new CustomError(err, 500)))
};
module.exports = updateProductCount;


