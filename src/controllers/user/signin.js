const { compare } = require("bcryptjs");
// const { signInSchema } = require('../../utils/validate');
// const CustomError = require('../../utils/CustomError');
const { userByEmail } = require("../../database/quiries");
const generateToken = require("../../utils/generateToken");

const signin = (req, res, next) => {
  const { email, password } = req.body;
  userByEmail(email).then(({ rows }) => {
    if (rows[0]) {
      compare(password, rows[0].password).then((data) => {
        console.log(data);

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
          res.json({ msg: `${rows[0].name} You Logged in Successfully` });
          // throw new CustomError('Wrong Password', 404);
        }
      });
    }
  });
};

module.exports = signin;
