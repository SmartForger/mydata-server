const createUser = async (root, args, { models }) => {
  const { User } = models
  const { firstname, lastname, email, password } = args

  await User.create({
    firstname,
    lastname,
    email,
    password
  })
}

export default {
  createUser
}