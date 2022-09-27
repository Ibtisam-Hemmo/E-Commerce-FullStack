const router = require('express').Router();

const userRouter = require('./userRouter');
const cartRouter = require('./cartRouter');

router.use(userRouter);
router.use(cartRouter);

module.exports = router;
