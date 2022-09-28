const userRouter = require("express").Router();
const { signup } = require("../controllers/user");
const { signin } = require("../controllers/user");

userRouter.post("/api/v1/users/signup", signup);
userRouter.post("/api/v1/users/signin", signin);

module.exports = userRouter;
