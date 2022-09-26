const connection = require('../../config/connection');

const addUser = ({ username, Email, img }, hash) => {
  const sql = {
    text: 'INSERT INTO users(user_name, email, img, password) VALUES($1, $2, $3, $4) RETURNING *',
    values: [username, Email, img, hash],
  };
  return connection.query(sql);
};

module.exports = { addUser };