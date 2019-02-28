import Joi from "joi";

export const registerSchema = Joi.object().keys({
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required(),
  name: Joi.string()
    .regex(/^[A-Z]/, "should start with an uppercase")
    .required(),
  password: Joi.string()
    .min(8)
    .regex(/[0-9]/, "number")
    .regex(/[a-z]/, "lowercase")
    .regex(/[A-Z]/, "uppercase")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "special character")
    .required()
});
