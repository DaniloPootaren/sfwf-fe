import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginPayload } from "../types";
import { login } from "../../api/login";

const loginThunk = createAsyncThunk(
  "authentication/login",
  async (payload: LoginPayload, _thunkAPI) => {
    const response = await login(payload);
    return response;
  }
);

export const authenticationAction = { loginThunk };
