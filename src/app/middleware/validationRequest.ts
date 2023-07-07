import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

export const ValidationRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      })
      return next()
    } catch (error) {
      // res.status(400).json({
      //   // success: false,
      //   // message: 'failed data',
      //   myError: err,
      // })
      next(error)
    }
  }
