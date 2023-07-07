import mongoose from 'mongoose'
import { GenericReseponse } from '../interface/common'
import { GlobalErrorMEssages } from '../interface/error'

export const handleErrorMessages = (
  err: mongoose.Error.ValidationError
): GenericReseponse => {
  const errors: GlobalErrorMEssages[] = Object.values(err.errors).map(
    (ele): GlobalErrorMEssages => {
      return { path: ele.path, message: ele.message }
    }
  )
  const statusCode = 400

  return {
    statusCode,
    message: 'VadidationError',
    errorMessages: errors,
  }
}
