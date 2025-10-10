import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./Redux-toolkit/Reducers/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice
  },
})
