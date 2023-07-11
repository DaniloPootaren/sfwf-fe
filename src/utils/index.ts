import { store } from "../App";
import { BASE_URL } from "../constants";
import { MaupassProfile, Me } from "../redux/types";

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

export const getMaupassVal = (attribute: MaupassProfile) => {
  const profile = (store.getState() as any).authentication.data.me as Me;
  // @ts-ignore
  return profile[attribute.trim()];
};

export function replaceWordsWithMaupassName(str: string) {
  const profile = (store.getState() as any).authentication.data.me as Me;
  // return str?.replace(/\bI\S*\b/g, `I ${profile.name} ${profile.surname}, `).replace(/\./g, " ") || '';
  return str?.replace("I ……………………………………………………………………………………………", `I ${profile.name} ${profile.surname}, `).replace(/\./g, "") || '';


}
