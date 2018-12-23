
const getAllUsers = async (root, args, { models }) => {
  return models.User.findAll({})
}

const getUser = async (root, { id }, { models }) => {
  return models.User.findOne({ where: { id } })
}

export default {
  users: getAllUsers,
  user: getUser
}
