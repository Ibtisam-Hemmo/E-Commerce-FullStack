const connection = require('../config/connection');

const userByEmail = (email) => connection.query('SELECT * FROM users WHERE email = $1', [email]);

module.exports = {
  userByEmail,
};
