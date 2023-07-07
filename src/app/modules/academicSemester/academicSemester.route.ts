import { Router } from 'express'
import { ValidationRequest } from '../../middleware/validationRequest'
import { academicSemesterControllar } from './academicSemester.controllar'
import { createAcademicSemesterZodSchema } from './academicSemester.validation'
// import usersControllar from './user.controllar'
// import { createUserZodSchema } from './user.validation'

const academicSemesterRouter = Router()

academicSemesterRouter.post(
  '/create-academic-semester',
  ValidationRequest(createAcademicSemesterZodSchema),
  academicSemesterControllar.createAcademicSemesters
)

export default academicSemesterRouter
