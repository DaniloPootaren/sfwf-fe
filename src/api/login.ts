import axios from "axios";
import { BASE_URL } from "../constants";
import { Login, LoginResponse } from "../redux/types";

export const login = (login: Login): Promise<{ data: LoginResponse }> => {
  return axios.post(`${BASE_URL}/login`, login);
};
