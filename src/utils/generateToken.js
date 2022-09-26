const { sign } = require('jsonwebtoken');
require('env2')('.env');
const CustomError = require('./CustomError');

module.exports = generateToken = (res, payload) => {
  console.log('generateToken');
};
