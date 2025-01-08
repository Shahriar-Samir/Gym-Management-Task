import { NextFunction, Request, Response } from 'express'
import { createUserIntoDB } from './user.service'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createUserIntoDB(req.body)
    return res.json({
      success: true,
      statusCode: 201,
      message: 'User create successfully',
      Data: result,
    })
  } catch (err) {
    return next(err)
  }
}
