const connection = require('../../config/connection');

const addUser = ({ username, Email, img }, hash) => {
  const sql = {
    text: 'INSERT INTO users(user_name, email, password) VALUES($1, $2, $3) RETURNING *',
    values: [username, Email, img, hash],
  };
  return connection.query(sql);
};

module.exports = { addUser };
