export type TUser = {
  id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'trainer' | 'trainee'
  createdAt: string
  updatedAt: string
}
