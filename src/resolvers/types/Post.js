const getCategory = async ({ category_id }, args, { models }) =>
  models.Category.findOne({
    where: { id: category_id }
  })

export default {
  Category: getCategory
}