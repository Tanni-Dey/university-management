import { Request, Response } from 'express'
import usersService from './users.service'

const createUsers = async (req: Request, res: Response) => {
  try {
    const result = await usersService.createUser(req.body)
    res.send(result)
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'failed data',
    })
  }
}
export default {
  createUsers,
}
