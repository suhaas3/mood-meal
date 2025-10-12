import { createSlice } from "@reduxjs/toolkit";

const user = {
  isAuthenticate: null
}

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      user.isAuthenticate = true;
      return action.payload;
    },
    removeUser: (state, action) => {
      user.isAuthenticate = false
      return null;
    }
  }
}) 

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;