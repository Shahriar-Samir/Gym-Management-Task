import mongoose, { model, Schema } from 'mongoose'
import { TClassSchedule } from './class.interface'

const ClassScheduleSchema = new Schema<TClassSchedule>(
  {
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    trainerId: {
      type: String,
      ref: 'Trainer',
      required: true,
    },
    trainees: [
      {
        type: Array,
        ref: 'Trainee',
      },
    ],
  },
  {
    timestamps: true,
  }
)

// Create and export the model
export const ClassSchedule = model<TClassSchedule>(
  'ClassSchedule',
  ClassScheduleSchema
)
