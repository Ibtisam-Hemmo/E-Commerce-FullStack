const { hash } = require("bcryptjs");
const { signUpSchema } = require("../../utils/validate");
const { addUser, userByEmail } = require("../../database/quiries");
const CustomError = require("../../utils/CustomError");
const generateToken = require("../../utils/generateToken");

const signup = (req, res, next) => {
  const { email, password } = req.body;
  signUpSchema
    .validateAsync(req.body)
    .then(() => userByEmail(email))
    .then(({ rowCount }) => {
      if (rowCount) {
        throw new CustomError("Email already Exists", 409);
      }
      return hash(password, 10);
    })
    .then((hashedPass) => addUser(req.body, hashedPass))
    .then(({ rows }) =>
      generateToken({
        id: rows[0].id,
        img: rows[0].img,
        name: rows[0].name,
      })
    )
    .catch((err) => {
      if (err.details) {
        next(new CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = signup;
