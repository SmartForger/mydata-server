import { ServerSideError } from "../../utils/errors";

export default modelName => ({
  createObject: async (root, args, { models, me }) => {
    return models[modelName].create(args);
  },

  deleteObject: async (root, args, { models }) => {
    const { id } = args;

    try {
      const obj = await models[modelName].findOne({
        where: { id }
      });

      await obj.destroy();

      return obj;
    } catch (err) {
      console.log(err);
      throw new ServerSideError("Cannot delete object");
    }
  },

  updateObject: async (root, args, { models }) => {
    const { id } = args;

    try {
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
      console.log(err);
      throw new ServerSideError("Cannot update object");
    }
  },

  linkObject: targetModel => async (root, args, { models }) => {
    const { from, to, remove } = args;

    try {
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
      console.log(err);
      throw new ServerSideError("Cannot link objects");
    }
  }
});
