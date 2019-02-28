import Joi from "joi";

export default Joi.object().keys({
  id: Joi.number().integer().min(0),
  title: Joi.string().regex(/^.+$/, "required"),
  content: Joi.string().regex(/^.+$/, "required"),
  slug: Joi.string().regex(/^[\w\d\-\_]+$/, "slug"),
  tags: Joi.array().items(Joi.string()),
  category_id: Joi.number().integer().min(0),
  user_id: Joi.number().integer().min(0)
});
