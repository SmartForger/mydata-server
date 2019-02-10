import { checkAdmin, checkUser } from '../../utils/helpers'

const getAllUsers = async (root, args, { models, me }) => {
  checkAdmin(me)

  return models.User.findAll({})
}

const getUser = async (root, { id }, { models, me }) => {
  checkAdmin(me)

  return models.User.findOne({ where: { id } })
}

const currentUser = async (root, args, { models, me }) => {
  checkUser(me)

  return models.User.findOne({
    where: {
      username: me.username
    }
  })
}

export default {
  users: getAllUsers,
  user: getUser,
  currentUser
}
