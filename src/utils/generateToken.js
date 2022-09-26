const { sign } = require('jsonwebtoken');
require('env2')('.env');
const CustomError = require('./CustomError');

module.exports = generateToken = (payLoad) => new Promise((resolve, reject) => {
  sign(payLoad, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      return reject(err);
    }

    return resolve(token);
  });
});
