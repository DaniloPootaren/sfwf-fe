import { BASE_URL } from "../constants";

export const colorScheme = {
  primary: "#638B1E",
  secondary: "#9CAF26",
};

export const getImageUrl = (url: string) => {
  if (url !== "") {
    return `${BASE_URL}`.replace("/api", "").concat(url);
  } else {
    return "https://dummyimage.com/600x400";
  }
};
