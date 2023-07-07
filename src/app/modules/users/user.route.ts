import { Router } from 'express'
import { ValidationRequest } from '../../middleware/validationRequest'
import usersControllar from './user.controllar'
import { createUserZodSchema } from './user.validation'

const router = Router()

router.post(
  '/create-user',
  ValidationRequest(createUserZodSchema),
  usersControllar.createUsers
)

export default router
