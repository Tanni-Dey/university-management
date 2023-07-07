import { User } from './user.model'

const findLastId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const genaretedId = async (): Promise<string> => {
  const currentId = (await findLastId()) || (0).toString().padStart(5, '0')
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId
}
