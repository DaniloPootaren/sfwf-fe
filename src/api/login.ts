import axios from "axios";
import { BASE_URL } from "../constants";
import { Login, LoginResponse } from "../redux/types";

export const login = async (login: Login): Promise<{ data: LoginResponse }> => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, login);
    return response.data;
  } catch (e) {
    alert('Invalid username or password');
    throw e;
  }
};
