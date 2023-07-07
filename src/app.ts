import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import router from './app/modules/users/user.route'

const app: Application = express()
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', router)

//test
// app.get('/', (req: Request, res: Response) => {
//   throw new ApiErrors(400, 'orebaba')
// })

app.use(globalErrorHandler)

export default app
