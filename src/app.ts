import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersService from './app/modules/user/users.service'

const app: Application = express()
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  const user = await usersService.createUser({
    id: '999',
    role: 'student',
    password: 'bangadesh',
  })
  // res.send('University management')
  res.send(user)
})

export default app
