import { RequestHandler } from 'express'
import usersService from './user.service'

const createUsers: RequestHandler = async (req, res, next) => {
  try {
    const result = await usersService.createUser(req.body)
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
export default {
  createUsers,
}
