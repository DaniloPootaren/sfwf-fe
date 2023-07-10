import { createSlice } from "@reduxjs/toolkit";
import { LoginResponse } from "../types";

const initialState: LoginResponse = {
  profileId: null,
  user: null,
  access_token: null,
  me: null,
  role: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateProfile: (state) => {},
  },
});

export const { updateProfile } = authSlice.actions;
export default authSlice.reducer;
