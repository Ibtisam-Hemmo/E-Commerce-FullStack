const { verify } = require("jsonwebtoken");
const CustomError = require("./CustomError");
require("env2")(".env");

const verifyToken = () => {
  console.log("verifyToken");
};

module.exports = verifyToken;
