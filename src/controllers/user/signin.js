const { compare } = require("bcryptjs");
const { userByEmail } = require("../../database/quiries");
const generateToken = require("../../utils/generateToken");
const CustomError = require("../../utils/CustomError");

const signin = (req, res, next) => {
  const { email, password } = req.body;
  userByEmail(email)
    .then(({ rows }) => {
      console.log("Rows for email signin: ", rows[0]);

      if (rows[0]) {
        compare(password, rows[0].password).then((data) => {
          console.log("Rows Compared: ", data);

          if (data) {
            userByEmail(email)
              .then(({ rows }) =>
                generateToken(res, {
                  id: rows[0].id,
                  img: rows[0].img,
                  name: rows[0].name,
                })
              )
              .then((token) =>
                res
                  .cookie("token", token)
                  .json({ success: "Signed In Successfully" })
              );
          } else {
            throw new CustomError("Incorrect Password", 409);
          }
        });
      } else {
        throw new CustomError("This email does not have any account", 404);
      }
    })
    .catch((err) => next(err));
};

module.exports = signin;
