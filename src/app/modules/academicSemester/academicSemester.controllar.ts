import { RequestHandler } from 'express'
import { academicSemesterService } from './academicSemester.service'
// import usersService from './user.service'

const createAcademicSemesters: RequestHandler = async (req, res, next) => {
  try {
    const result = await academicSemesterService.createAcademicSemester(
      req.body
    )
    res.send(result)
  } catch (err) {
    // res.status(400).json({
    //   // success: false,
    //   // message: 'failed data',
    //   myError: err,
    // })
    next(err)
  }
}
export const academicSemesterControllar = {
  createAcademicSemesters,
}
