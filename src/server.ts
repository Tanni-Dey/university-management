import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/test");
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      // console.log(`university mangment listening on port`, config.port)
    })
  } catch (err) {
    // console.log(`Application error ${err}`)
  }
}
main()
