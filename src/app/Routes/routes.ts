import userRoutes from '../modules/user.route'
import express from 'express'

const router = express.Router()

const routes = [
  {
    path: '/users',
    route: userRoutes,
  },
]

routes.forEach((route) => router.use(route.path, route.route))

export default router
