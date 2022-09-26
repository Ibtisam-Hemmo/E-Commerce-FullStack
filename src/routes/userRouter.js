const userRouter = require('express').Router();
const { signin } = require('../controllers/user');

userRouter.post('/api/v1/users/signin', signin);

module.exports = userRouter;
