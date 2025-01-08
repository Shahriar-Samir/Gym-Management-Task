import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
})

const UserModel = model('User', userSchema)

export default UserModel
