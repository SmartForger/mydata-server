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
    console.log(err)
    throw new ServerSideError('Cannot delete note')
  }
}

const updateNote = async (root, args, { models }) => {
  const { id, title, content, tags } = args

  try {
    const note = await models.Note.findOne({
      where: { id }
    })

    if (title) note.title = title
    if (content) note.content = content
    if (tags) note.tags = tags

    await note.save()

    return note
  } catch (err) {
    console.log(err)
    throw new ServerSideError('Cannot update note')
  }
}

export default {
  createNote,
  deleteNote,
  updateNote
}