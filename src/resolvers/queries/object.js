import { Op } from "sequelize";
import { checkUser } from "../../utils/helpers";

const includeFields = {
  Post: "Post",
  Category: "Category"
};

function changeOperators(where) {
  const keys = Object.keys(where);
  keys.forEach(key => {
    if (typeof where[key] !== "string" && Object.keys(where[key]).length > 0) {
      changeOperators(where[key]);
    }

    if (key.startsWith("__")) {
      where[Op[key.substr(2)]] = where[key];
      delete where[key];
    }
  });
}

function generateOptions(models, where) {
  const keys = Object.keys(where);
  const generated = {
    where: {},
    include: []
  };

  keys.forEach(key => {
    if (
      includeFields[key] &&
      typeof where[key] === "object" &&
      Object.keys(where[key]).length > 0
    ) {
      const im = includeFields[key];

      generated.include.push({
        model: models[im],
        as: key
      });

      const subKeys = Object.keys(where[key]);
      subKeys.forEach(key1 => {
        generated.where[`$${key}.${key1}$`] = where[key][key1];
      });
    } else {
      generated.where[key] = where[key];
    }
  });

  changeOperators(generated.where);

  return generated;
}

export default modelName => ({
  getObjects: options => async (root, args, { models, me }) => {
    checkUser(me, options);
    if (options && options.schema) {
      await Joi.validate(args, options.schema);
    }

    const { where } = args;
    const params = where ? generateOptions(models, where) : {};
    return models[modelName].findAll(params);
  },
  getObject: options => async (root, { id }, { models, me }) => {
    checkUser(me, options);
    if (options && options.schema) {
      await Joi.validate(args, options.schema);
    }

    return models[modelName].findOne({
      where: { id }
    });
  }
});
