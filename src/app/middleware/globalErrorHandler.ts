/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import config from '../../config'
import ApiErrors from '../../errors/ApiError'
import { handleErrorMessages } from '../../errors/handleErrorMessages'
import { handleZodErrorMessages } from '../../errors/handleZodErrorMessage'
import { GlobalErrorMEssages } from '../../interface/error'
import logger from '../../shared/logger'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log('globalHandlreError', error)
    : logger.errorLogger.error('globalError', error)

  let statusCode = 500
  let errorMessages: GlobalErrorMEssages[] = []
  let message = 'Something went wrong'

  if (error?.name === 'VadidationError') {
    const simplifyError = handleErrorMessages(error)
    statusCode = simplifyError.statusCode
    message = simplifyError.message
    errorMessages = simplifyError.errorMessages
  } else if (error instanceof ZodError) {
    const simplifyError = handleZodErrorMessages(error)
    statusCode = simplifyError.statusCode
    message = simplifyError.message
    errorMessages = simplifyError.errorMessages
  } else if (error instanceof ApiErrors) {
    statusCode = error.statusCode
    message = error.message
    errorMessages = error.message
      ? [
          {
            path: '',
            message: error.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error.message
    errorMessages = error.message
      ? [
          {
            path: '',
            message: error.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message: message,
    errorMessages: errorMessages,
    stack: config.env !== 'production' ? error.stack : undefined,
  })
  next()
}

export default globalErrorHandler
