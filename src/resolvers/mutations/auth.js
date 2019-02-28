import Joi from "joi";
import { encode } from "../../utils/token";
import { UnauthorizedError } from "../../utils/errors";
import { registerSchema } from "../validations/auth";

const sendUser = user => {
  const userData = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };

  const token = encode(userData);

  return {
    token,
    user: userData
  };
};

const login = async (_, args, { models }) => {
  try {
    const { email, password } = args;

    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedError("Invalid email or password");
    }

    const matchPassword = await user.comparePassword(password);
    if (!matchPassword) {
      throw new UnauthorizedError("Invalid email or password");
    }

    return sendUser(user);
  } catch (err) {
    throw err;
  }
};

const register = async (_, args, { models }) => {
  try {
    await Joi.validate(args, registerSchema);
    const user = await models.User.create(args);
    return sendUser(user);
  } catch (err) {
    throw err;
  }
};

export default {
  login,
  register
};
