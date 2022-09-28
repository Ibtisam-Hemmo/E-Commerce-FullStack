const { compare } = require("bcryptjs");
const { userByEmail } = require("../../database/quiries");
const generateToken = require("../../utils/generateToken");
const CustomError = require("../../utils/CustomError");

const signin = (req, res, next) => {
  const { email, password } = req.body;
  userByEmail(email)
    .then(({ rows }) => {
      if (rows[0]) {
        compare(password, rows[0].password).then((data) => {
          if (data) {
            userByEmail(email).then(({ rows }) => {
              generateToken({
                id: rows[0].id,
                img: rows[0].img,
                name: rows[0].name,
              }).then((token) =>
                res
                  .cookie("token", token)
                  .json({ success: "Signed Up Successfully" })
              );
            });
          } else {
            // throw new CustomError("Email already Exists", 409);
          }
        });
      } else {
        // throw new CustomError('This email does not have any account', 404);
      }
    })
    .catch((err) => console.log(err));
};

module.exports = signin;
