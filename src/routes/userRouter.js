const userRouter = require('express').Router();
const signup = require('../controllers/user/signup');

userRouter.post('/api/v1/users/signup', signup);

module.exports = userRouter;

