import express from 'express'
import router from './app/Routes/routes'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router)

export default app
