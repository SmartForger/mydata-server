import Joi from "joi";
import { checkUser } from "../../utils/helpers";
import { ServerSideError } from "../../utils/errors";

export default modelName => ({
  createObject: options => async (root, args, { models, me }) => {
    try {
      checkUser(me, options);
      if (options.schema) {
        await Joi.validate(args, options.schema);
      }

      return models[modelName].create(args);
    } catch (err) {
      throw err;
    }
  },

  deleteObject: options => async (root, args, { models, me }) => {
    try {
      checkUser(me, options);
      if (options.schema) {
        await Joi.validate(args, options.schema);
      }

      const { id } = args;
      const obj = await models[modelName].findOne({
        where: { id }
      });

      await obj.destroy();

      return obj;
    } catch (err) {
      throw err;
    }
  },

  updateObject: options => async (root, args, { models, me }) => {
    try {
      checkUser(me, options);
      if (options.schema) {
        await Joi.validate(args, options.schema);
      }

      const { id } = args;
      const obj = await models[modelName].findOne({
        where: { id }
      });

      if (obj) {
        Object.assign(obj, args);
        await obj.save();
        return obj;
      }

      throw new ServerSideError("Cannot find object");
    } catch (err) {
      throw err;
    }
  },

  linkObject: (targetModel, options) => async (root, args, { models, me }) => {
    try {
      checkUser(me, options);
      if (options.schema) {
        await Joi.validate(args, options.schema);
      }

      const { from, to, remove } = args;
      const obj = await models[modelName].findOne({
        where: { id: from },
        include: [
          {
            model: models[targetModel],
            as: targetModel,
            attributes: ["id"]
          }
        ]
      });

      if (remove) {
        await obj[`remove${targetModel}`].apply(obj, [to]);
      } else {
        await obj[`add${targetModel}`].apply(obj, [to]);
      }

      return obj;
    } catch (err) {
      throw err;
    }
  }
});
