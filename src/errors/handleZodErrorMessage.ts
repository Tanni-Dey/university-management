import { ZodError, ZodIssue } from 'zod'
import { GenericReseponse } from '../interface/common'
import { GlobalErrorMEssages } from '../interface/error'

export const handleZodErrorMessages = (error: ZodError): GenericReseponse => {
  const errors: GlobalErrorMEssages[] = error.issues.map(
    (issue: ZodIssue): GlobalErrorMEssages => {
      return { path: issue.path[issue.path.length - 1], message: issue.message }
    }
  )
  const statusCode = 400

  return {
    statusCode,
    message: 'VadidationError',
    errorMessages: errors,
  }
}
