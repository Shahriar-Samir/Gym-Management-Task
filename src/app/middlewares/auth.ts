import jwt from 'jsonwebtoken'
import config from '../config'

type TRouteType = 'messages' | 'conversations' | 'settings'

export const generateAccessToken = (payload: TRouteType) => {
  return jwt.sign(payload, config.tokenSecret as string, { expiresIn: '10d' })
}
