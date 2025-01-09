import { TClassSchedule } from './class.interface'
import { ClassScheduleModel } from './class.model'

export const createClassScheduleIntoDB = async (userData: TClassSchedule) => {
  const result = await ClassScheduleModel.create(userData)
  return result
}
