import { Schema, model } from 'mongoose'
import {
  IAcademicSemester,
  IAcademicSemesterModel,
  Month,
} from './academicSemester.interface'

const months: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: ['Autumn', 'Summer', 'Fall'] },
    year: { type: Number, required: true },
    code: { type: String, required: true },
    startMonth: { type: String, required: true, enum: months },
    endMonth: { type: String, required: true, enum: months },
  },
  {
    timestamps: true,
  }
)
export const AcademicSemester = model<
  IAcademicSemester,
  IAcademicSemesterModel
>('AcademicSemester', academicSemesterSchema)