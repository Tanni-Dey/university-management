import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { genaretedId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('user not created')
  }
  const id = await genaretedId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  return createdUser
}

export default {
  createUser,
}
