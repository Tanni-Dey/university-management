import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { genaretedId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await genaretedId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('user not created')
  }

  return createdUser
}

export default {
  createUser,
}
