const { hash } = require('bcrypt');
const { signUpSchema } = require('../../utils/validate');
const {
    addUser, userByEmail,
  } = require('../../database/quires');
const CustomError = require('../../utils/CustomError')
const generateToken = require('../../utils/generateToken')

const signup = (req, res, next) => {
    const {username, Email, img, password, confirmPassword,} = req.body
    signUpSchema.validateAsync(req.body)
    .then(() => userByEmail(req.body))
    .then((data) => {
      if (data.rowCount) {
        throw CustomError('Email is already Exists', 409);
      }
      return password;
    })
    .then((pass) => hash(pass, 10))
    .then((hash) => addUser(req.body, hash))
    .then((data) => {
      const { id } = data.rows[0];
      const { user_name } = data.rows[0];
      return generateToken({ id, username: user_name });
    })
    .then((token) => res.status(201)
      .cookie('token', token, { httpOnly: true })
      .json({ message: 'Success', status: 201 }))
    .catch((err) => {
      if (err.details) {
        next(CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = signup;
