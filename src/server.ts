import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import logger from './shared/logger'

async function main() {
  let server: Server
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/test");
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.successLogger.info(
        `university mangment listening on port`,
        config.port
      )
    })
  } catch (err) {
    logger.errorLogger.error(`Application error ${err}`)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        logger.errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
main()
