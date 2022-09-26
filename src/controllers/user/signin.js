const { hash } = require('bcrypt');
const { signInSchema } = require('../../utils/validate');
const CustomError = require('../../utils/CustomError');

const signin = (req, res, next) => {
  console.log('signin');
};

module.exports = signin;
