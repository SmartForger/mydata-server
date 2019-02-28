import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "XZvAI8FfeV";

export const encode = data => {
  return jwt.sign(
    {
      data,
      exp: Math.floor(Date.now() / 1000) + 86400
    },
    secret
  );
};

export const decode = token => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    console.log(err.name);
  }

  return { data: {} };
};
