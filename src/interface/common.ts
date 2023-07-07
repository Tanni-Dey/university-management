import { GlobalErrorMEssages } from './error'

export type GenericReseponse = {
  statusCode: number
  message: string
  errorMessages: GlobalErrorMEssages[]
}
