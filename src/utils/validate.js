const Joi = require("joi");

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  img: Joi.string().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")),
});

const signInSchema = Joi.object({});

module.exports = { signInSchema, signUpSchema };
