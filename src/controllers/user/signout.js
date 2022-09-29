const signout = (req, res, next) => {
  res.clearCookie("jwt").send("Signed Out");
};

module.exports = signout;
