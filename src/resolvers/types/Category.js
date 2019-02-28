const getPosts = async ({ id }, args, { models }) =>
  models.Post.findAll({
    where: { category_id: id }
  })

export default {
  Posts: getPosts
}