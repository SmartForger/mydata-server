import { checkAdmin, success } from "../../utils/helpers";
import { NotFoundError } from "../../utils/errors";

const approveUser = async (root, { username }, { models, me }) => {
  checkAdmin(me)

  try {
    const user = await models.User.findOne({
      where: { username }
    })

    if (!user) {
      throw new NotFoundError('User not found')
    }

    user.status = 1
    await user.save()

    return success('User is approved by admin')
  } catch (err) {
    console.log(err.name)
    throw err
  }
}

export default {
  approveUser
}