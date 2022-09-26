const { hash } = require('bcrypt');
const { signUpSchema } = require('../../utils/validate');
const CustomError = require('../../utils/CustomError');

const signup = (req, res, next) => {
  console.log('signup');
};

module.exports = signup;
