import { TUser } from './class.interface'
import UserModel from './class.model'

export const createUserIntoDB = async (userData: TUser) => {
  const result = await UserModel.create(userData)
  return result
}
