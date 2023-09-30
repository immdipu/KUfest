import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { signupResponseTypes } from "@/types/AuthTypes";

interface initialStateProps {
  fullName: string | null;
  username: string | null;
  isUserAuthenticated: boolean;
  token: string | null;
  id: string | null;
  profilePic: string | null;
}

const initialState: initialStateProps = {
  fullName: null,
  username: null,
  isUserAuthenticated: false,
  token: null,
  id: null,
  profilePic: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoggedIn: (state, action: PayloadAction<signupResponseTypes>) => {
      state.fullName = action.payload.fullName;
      state.isUserAuthenticated = true;
      state.profilePic = action.payload.profilePic;
      state.username = action.payload.username;
      state.id = action.payload._id;
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
    },
    LoggedOut: (state) => {
      state.fullName = null;
      state.id = null;
      state.profilePic = null;
      state.username = null;
      state.isUserAuthenticated = false;
      localStorage.removeItem("token");
    },
    AutoLogin: (state) => {
      state.token = localStorage.getItem("token");
      state.isUserAuthenticated = true;
    },
  },
});

export default authSlice.reducer;
export const { LoggedIn, LoggedOut, AutoLogin } = authSlice.actions;
