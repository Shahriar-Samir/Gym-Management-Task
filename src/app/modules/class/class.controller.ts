import { NextFunction, Request, Response } from 'express'
import { createClassScheduleIntoDB } from './class.service'

export const createClassSchema = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createClassScheduleIntoDB(req.body)
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
