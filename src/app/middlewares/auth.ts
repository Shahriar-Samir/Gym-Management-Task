import jwt from 'jsonwebtoken'
import config from '../config'
import { TJWTPayload } from '../modules/auth/auth.interface'

export const generateAccessToken = (payload: TJWTPayload) => {
  return jwt.sign(payload, config.tokenSecret as string, { expiresIn: '10d' })
}
