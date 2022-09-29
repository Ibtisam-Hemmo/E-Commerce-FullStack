const userRouter = require("express").Router();
const { signup } = require("../controllers/user");
const { signin } = require("../controllers/user");
const { signout } = require("../controllers/user");
const authUser = require("../utils/authUser");

userRouter.post("/api/v1/users/signup", signup);
userRouter.post("/api/v1/users/signin", signin);
userRouter.get("/isLogged", authUser);
userRouter.get("/signout", signout);
module.exports = userRouter;
