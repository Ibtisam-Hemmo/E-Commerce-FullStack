const userRouter = require('express').Router();
const signup = require('../controllers/user/signup');

userRouter.get('/test', (req, res) => res.send('TESTED PASSED YEEEAHH!!'));
userRouter.post('/api/v1/users/signup', signup);

module.exports = userRouter;

