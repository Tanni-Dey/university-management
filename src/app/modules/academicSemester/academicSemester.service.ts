import httpStatus from 'http-status'
import ApiErrors from '../../../errors/ApiError'
import { academicSemesterCodeMapper } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
// import { IUser } from './user.interface'
// import { User } from './user.model'
// import { genaretedId } from './user.utils'

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  if (academicSemesterCodeMapper[payload.title] !== payload.code) {
    throw new ApiErrors(
      httpStatus.BAD_REQUEST,
      'Academic Semester Code is Invalid'
    )
  }
  const createdAcademicSemester = await AcademicSemester.create(payload)
  return createdAcademicSemester
}

export const academicSemesterService = {
  createAcademicSemester,
}
