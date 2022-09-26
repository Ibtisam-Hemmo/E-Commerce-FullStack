const Joi = require('joi');

const signUpSchema = Joi.object({
    username: joi.string().required(),
    Email: joi.string().email().required(),
    img: joi.string().required(),
    password: joi.string().min(8).required(),
    confirmPassword: joi.string().required().valid(joi.ref('password')),
});

const signInSchema = Joi.object({
  
});

module.exports = { signInSchema, signUpSchema };