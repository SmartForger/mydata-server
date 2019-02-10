import auth from './auth'
import admin from './admin'
import note from './note'

export default {
  ...auth,
  ...admin,
  ...note
}