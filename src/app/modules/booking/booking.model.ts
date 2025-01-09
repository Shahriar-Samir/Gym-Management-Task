import { Schema, model } from 'mongoose'
import { TBooking } from './booking.interface'

// Define the interface for the Booking document

// Create the schema for the Booking model
const BookingSchema = new Schema<TBooking>(
  {
    id: {
      type: String,
      required: true,
    },
    traineeId: {
      type: String,
      ref: 'Trainee',
      required: true,
    },
    scheduleId: {
      type: String,
      ref: 'ClassSchedule',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// Create the Booking model
const Booking = model<TBooking>('Booking', BookingSchema)

export default Booking
