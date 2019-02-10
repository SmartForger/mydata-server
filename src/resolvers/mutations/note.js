import { ServerSideError } from '../../utils/errors'

const createNote = async (root, args, { models, me }) => {
  const { title, content, tags } = args

  return models.Note.create({
    title,
    content,
    tags,
    ownerId: me.id
  })
}

const deleteNote = async (root, args, { models }) => {
  const { id } = args

  try {
    const note = await models.Note.findOne({
      where: { id }
    })

    await note.destroy()

    return note
  } catch (err) {
    console.log(err);
    throw new ServerSideError('Cannot delete note')
  }
}

export default {
  createNote,
  deleteNote
}