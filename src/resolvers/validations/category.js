import Joi from "joi";

export default Joi.object().keys({
  id: Joi.number().integer().min(0),
  name: Joi.string().regex(/^.+$/, "required"),
  slug: Joi.string().regex(/^[\w\d\-\_]+$/, "slug")
});
