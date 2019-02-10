import { encode } from '../../utils/token'
import { UnauthorizedError } from '../../utils/errors'
import { success } from '../../utils/helpers';

const signUp = async (root, args, { models }) => {
  const { User } = models
  const { firstname, lastname, username, password } = args

  try {
    await User.create({
      firstname,
      lastname,
      username,
      role: 'user',
      password,
      status: 0
    })

    return success('User signed up successfully')
  } catch (err) {
    console.error(err.name)
    if (err.name === 'SequelizeUniqueConstraintError') {
      throw new Error('User already exists')
    }
    throw err
  }
}

const login = async (root, args, { models }) => {
  try {
    const { username, password } = args

    const user = await models.User.findOne({
      where: { username }
    })

    if (!user) {
      throw new UnauthorizedError('Invalid username or password')
    }

    const passwordMatch = await user.comparePassword(password)

    if (passwordMatch) {
      if (!user.status) {
        throw new UnauthorizedError('Not approved by admin')
      }

      const token = encode({ id: user.id, username, role: user.role })

      return { token }
    }
  } catch (err) {
    console.error(err.name)
    throw err
  }
}

export default {
  signUp,
  login
}