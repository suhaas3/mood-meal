import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  UserDetails: {
    username: "",
    mood: ""
  },
}


export const MoodFormSlice = createSlice({
  name: 'Auth_form',
  initialState: globalState,
  reducers: {
    MoodMealForm: (state,action) => {
      state.UserDetails.username = action.payload.username;
      state.UserDetails.mood = action.payload.mood; 
    },
  },
})

export const { MoodMealForm } = MoodFormSlice.actions

export default MoodFormSlice.reducer