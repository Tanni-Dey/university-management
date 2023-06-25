import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'

const app: Application = express()
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', router)

app.get('/', async (req: Request, res: Response) => {
  // await usersService.createUser({
  //   id: '973',
  //   password: 'university-pass',
  //   role: 'student',
  // })
  res.send('University management')
  // res.send(user)
})

export default app
