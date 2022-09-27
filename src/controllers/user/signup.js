const { hash } = require('bcrypt');
const { signUpSchema } = require('../../utils/validate');
const CustomError = require('../../utils/CustomError')

const signup = (req, res, next) => {
  const {
    username, email, img, password, confirmPassword,
  } = req.body;
  signUpSchema.validateAsync(req.body)
    .then(() => userByEmail(email))
    .then((rows) => {
      if (rows.rowCount) {
        throw new CustomError('Email already Exists', 409);
      }
      return password;
    })
    .then((pass) => hash(pass, 10))
    .then((hashing) => addUser(req.body, hashing))
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
        next(new CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = signup;