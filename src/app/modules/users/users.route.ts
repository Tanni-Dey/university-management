import { Router } from 'express'
import usersControllar from './users.controllar'

const router = Router()

router.post('/create-user', usersControllar.createUsers)

export default router
