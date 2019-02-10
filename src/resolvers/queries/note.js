import { checkUser } from '../../utils/helpers'

const getAllNotes = async (root, args, { models, me }) => {
  checkUser(me)

  return models.Note.findAll({})
}

const getNote = async (root, { id }, { models, me }) => {
  checkUser(me)

  return models.User.findOne({
    where: { id }
  })
}

export default {
  notes: getAllNotes,
  note: getNote
}
