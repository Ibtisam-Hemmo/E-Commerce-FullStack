const router = require("express").Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const cartRouter = require("./cartRouter");

router.use(userRouter);
router.use(productRouter);
router.use(cartRouter);

module.exports = router;
