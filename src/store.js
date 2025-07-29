import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Redux-toolkit/AuthSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice
  },
})
