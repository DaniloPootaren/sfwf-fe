import { Scheme } from "../models";
import { httpClient } from "../utils/network";

export const fetchSchemes = (): Promise<{ data: { data: Scheme[] } }> => {
  return httpClient().get("/schemes?populate[0]=image");
};
