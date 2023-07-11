export interface Login {
  email: string;
  password: string;
}

export type MaupassPayload = {
  email: string;
  password: string;
};

export enum RoleEnum {
  HW = "HW",
  IPC = "IPC",
}

export interface MaupassResponse {
  data: {
    result: {
      accessToken: string;
      encryptedAccessToken: string;
      expireInSeconds: number;
      shouldResetPassword: boolean;
      passwordResetCode: null;
      userId: number;
      requiresTwoFactorVerification: boolean;
      twoFactorAuthProviders: string[];
      twoFactorRememberClientToken: null;
      returnUrl: null;
      refreshToken: string;
      refreshTokenExpireInSeconds: number;
      shouldRegisterDevice: boolean;
    };
    targetUrl: null;
    success: boolean;
    error: null;
    unAuthorizedRequest: boolean;
    __abp: boolean;
  };
}

export interface MaupassGetCurrentUserProfileResponse {
  data: {
    result: Me;
    targetUrl: null;
    success: boolean;
    error: null;
    unAuthorizedRequest: boolean;
    __abp: boolean;
  };
}

export type Me = {
  userName: string;
  name: string;
  surname: string;
  surnameAtBirth: string;
  gender: string;
  dateOfBirth: string;
  isCitizen: boolean;
  passportNumber: string;
  nic: string;
  isTwoFactorEnabled: boolean;
  otpPreference: null;
  creationTime: string;
  emailAddress: string;
  phoneNumber: string;
  fixedLineNumber: null;
  address: string;
  city: string;
  country: string;
  nationality: string;
  state: string;
  townVillage: string;
  zipCode: string;
  subLocalityId: number;
  townVillageId: number;
  subLocalityName: string;
};

export type LoginResponse = {
  access_token?: string | null;
  role?: RoleEnum | null;
  me?: Me | null;
  profileId: number | null;
  user: {
    id: number;
    username: string;
    email: string;
  } | null;
};

export type Auth = {
  data: LoginResponse;
  loading: boolean;
};

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  me: Me;
  role: string;
  access_token: string;
  profileId: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export enum MaupassProfile {
  userName = "userName",
  name = "name",
  surname = "surname",
  surnameAtBirth = "surnameAtBirth",
  gender = "gender",
  dateOfBirth = "dateOfBirth",
  isCitizen = "isCitizen",
  passportNumber = "passportNumber",
  nic = "nic",
  isTwoFactorEnabled = "isTwoFactorEnabled",
  phoneNumber = "phoneNumber",
  fixedLineNumber = "fixedLineNumber",
  address = "address",
  city = "city",
  country = "country",
  nationality = "nationality",
  state = "state",
  townVillage = "townVillage",
  zipCode = "zipCode",
  subLocalityId = "subLocalityId",
  townVillageId = "townVillageId",
  subLocalityName = "subLocalityName",
}
