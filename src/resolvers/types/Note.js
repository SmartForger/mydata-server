const getOwner = async ({ ownerId }, args, { models }) =>
  models.User.findOne({
    where: { id: ownerId }
  })

export default {
  owner: getOwner
}