import { configureStore } from '@reduxjs/toolkit'
import Hostelreducer from './features/Hostelslice'

export const store = configureStore({
  reducer: {
    hostel: Hostelreducer,
  },
})