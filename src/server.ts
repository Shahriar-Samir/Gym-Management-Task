import mongoose from 'mongoose'
import config from './app/config'
import { app } from './app'

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(config.port as string)
  app.listen(5000, () => {
    console.log(`Example app listening on port ${config.dbUri}`)
  })
}
