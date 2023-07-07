import { Router } from 'express'
import { ValidationRequest } from '../../middleware/validationRequest'
import { createAcademicSemesterZodSchema } from './academicSemester.validation'
// import usersControllar from './user.controllar'
// import { createUserZodSchema } from './user.validation'

const router = Router()

router.post(
  '/create-user',
  ValidationRequest(createAcademicSemesterZodSchema)
  // usersControllar.createUsers
)

export default router
