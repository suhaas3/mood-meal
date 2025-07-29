import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Redux-toolkit/Reducers/AuthSlice'
import MoodFormSlice from './Redux-toolkit/MoodFormSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    mood: MoodFormSlice
  },
})
