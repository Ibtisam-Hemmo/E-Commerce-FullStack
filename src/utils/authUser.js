/* eslint-disable no-multi-assign */
const { verify } = require("jsonwebtoken");
const CustomError = require("./CustomError");
require("env2")(".env");

module.exports = authUser = (req, res, next) => {
  try {
    const existedToken = req.cookies.jwt;
    if (!existedToken) throw new CustomError("You are not authorized!", 400);
    verify(existedToken, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        throw new CustomError("Token is being manipulated!", 400);
      } else {
        res.send(decoded);
      }
    });
  } catch (err) {
    next(err);
  }
};
