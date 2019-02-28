export const getCategory = async ({ category_id }, args, { models }) =>
  models.Category.findOne({
    where: { id: category_id }
  });

export const getUser = async ({ user_id }, args, { models }) =>
  models.User.findOne({
    where: { id: user_id }
  });

export const getPosts = async ({ id }, args, { models }) =>
  models.Post.findAll({
    where: { category_id: id }
  });
