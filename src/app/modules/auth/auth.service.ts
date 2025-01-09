import { generateAccessToken } from '../../middlewares/auth'
import UserModel from '../user/user.model'

export const loginUser = async (payload: TLoginUser) => {
  const user = await UserModel.isUserExists(payload.email)
  if (!user) {
    throw new Error('User not found')
  }
  if (user.isDeleted) {
    throw new Error('This user is deleted')
  }

  const jwtPayload = {
    email: user.email,
    uid: user.uid,
  }

  const accessToken = generateAccessToken(jwtPayload)
  return { accessToken }
}
