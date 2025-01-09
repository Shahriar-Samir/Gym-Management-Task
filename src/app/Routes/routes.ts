import authRoutes from '../modules/auth/auth.route'
import userRoutes from '../modules/user/user.route'
import express from 'express'

const router = express.Router()

const routes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
]

routes.forEach((route) => router.use(route.path, route.route))

export default router
