import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../types";
import { authenticationAction } from "../actions";

const initialState: Auth = {
  data: {
    profileId: null,
    user: null,
    access_token: null,
    me: null,
    role: null,
  },
  loading: false,
};

const {loginThunk} = authenticationAction;

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(loginThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(loginThunk.rejected, state => {
      state.loading = false;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
