// import { createSlice } from "@reduxjs/toolkit";

// const user = {
//   isAuthenticate: null
// }

// const userSlice = createSlice({
//   name: "user",
//   initialState: null,
//   reducers: {
//     addUser: (state, action) => {
//       user.isAuthenticate = true;
//       return action.payload;
//     },
//     removeUser: (state, action) => {
//       user.isAuthenticate = false
//       return null;
//     }
//   }
// }) 

// export const {addUser, removeUser} = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.isAuthenticate = true;
      state.userData = action.payload;
    },
    removeUser: (state) => {
      state.isAuthenticate = false;
      state.userData = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
