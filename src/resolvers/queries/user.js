let users = {
  1: {
    id: '1',
    username: 'Test User'
  },
  2: {
    id: '2',
    username: 'David Woods'
  }
}

const me = () => users[1]

const user = (parent, { id }) => {
  return users[id]
}

export default {
  me,
  user
}
