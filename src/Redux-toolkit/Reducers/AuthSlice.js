import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  isAuthenticate: false,
  LoginUserDetails: {
    userName: "",
    passWord: ""
  },
}


export const AuthSlice = createSlice({
  name: 'Auth_form',
  initialState: globalState,
  reducers: {
    AuthLogin: (state,action) => {

      const {userName, passWord} = action.payload;
      state.LoginUserDetails.userName = action.payload.userName;
      state.LoginUserDetails.passWord = action.payload.passWord; 
        state.isAuthenticate = true;
    },
    OpenLogin: (state,action) => {
      state.isOpenLogin = action.payload;
    },
    Logut: (state,action) => {
      state.isAuthenticate = false;
      state.LoginUserDetails.userName = "";
      state.LoginUserDetails.passWord = ""; 
    }
  },
})

export const { AuthLogin, Logut} = AuthSlice.actions

export default AuthSlice.reducer