/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const { sign } = require("jsonwebtoken");
require("env2")(".env");
const CustomError = require("./CustomError");

module.exports = generateToken = (res, payload) =>
  sign(
    payload,
    process.env.SECRET_KEY,
    { algorithm: "HS256" },
    (err, token) => {
      if (err) {
        throw new CustomError(err, 401);
      } else {
        res.cookie("jwt", token).send({ message: "token saved" });
      }
    }
  );
