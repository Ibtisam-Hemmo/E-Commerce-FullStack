const connection = require("../config/connection");

const addUser = ({ name, email, img }, hash) => {
  const sql = {
    text: "INSERT INTO users(name, email, img, password) VALUES($1, $2, $3, $4) RETURNING *",
    values: [name, email, img, hash],
  };
  return connection.query(sql);
};

const userByEmail = (email) =>
  connection.query("SELECT * FROM users WHERE email = $1", [email]);

module.exports = { addUser, userByEmail };
