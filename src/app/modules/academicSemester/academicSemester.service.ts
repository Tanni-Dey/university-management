import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
// import { IUser } from './user.interface'
// import { User } from './user.model'
// import { genaretedId } from './user.utils'

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  const createdAcademicSemester = await AcademicSemester.create(payload)
  return createdAcademicSemester
}

export const academicSemesterService = {
  createAcademicSemester,
}
