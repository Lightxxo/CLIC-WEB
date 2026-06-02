"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";

const SIGNUP_STORAGE_VERSION_KEY = "signupStorageVersion";
const SIGNUP_STORAGE_VERSION = "2";

const persistedSignupStorageKeys = [
  SIGNUP_STORAGE_VERSION_KEY,
  "formData",
  "token",
  "email",
  "userName",
  "imgURL",
  "isApproved",
  "firstName",
  "lastName",
  "gender",
  "otherGender",
  "sexualOrientation",
  "otherSexualOrientation",
  "dateOfBirth",
  "password",
  "confirmPassword",
  "occupation",
  "otherOccupation",
  "referredBy",
  "socialMediaObj",
  "socialMediaHandle",
  "about",
  "hearingPlatform",
  "whereLiveCountry",
  "whereLiveCity",
  "whereFromCountry",
  "whereFromCity",
  "answers",
  "profileImage",
  "live",
  "from",
  "cities",
  "refid",
];

const clearPersistedSignupState = () => {
  persistedSignupStorageKeys.forEach((key) => localStorage.removeItem(key));
};

const isObjectOrNull = (value: unknown) =>
  value === null || (typeof value === "object" && !Array.isArray(value));

const isStringOrNull = (value: unknown) =>
  value === null || typeof value === "string";

const isAnswerArray = (value: unknown) =>
  Array.isArray(value) &&
  value.every(
    (answer) =>
      answer &&
      typeof answer === "object" &&
      !Array.isArray(answer) &&
      typeof answer.question === "string" &&
      (typeof answer.selectedAns === "string" ||
        typeof answer.selectedAns === "number")
  );

const isStoredDateValid = (value: string | null) =>
  value === null || value === "" || !Number.isNaN(new Date(value).getTime());

const isStoredJsonObjectValid = (value: string | null) => {
  if (value === null || value === "" || value === "null") return true;

  try {
    return isObjectOrNull(JSON.parse(value));
  } catch {
    return false;
  }
};

export type FormDataType = {
  email: string | null;
  firstName: string;
  lastName: string;
  username: string;
  imgURL: string;
  gender: string;
  otherGender: string;
  sexualOrientation: string;
  otherSexualOrientation: string;
  answers: { question: string; selectedAns: string | number }[];
  verificationStatus: boolean;
  newUser: boolean;
  dateOfBirth: string;
  whereLiveCountry: object | null;
  whereLiveCity: object | null;
  whereFromCountry: object | null;
  whereFromCity: object | null;
  password: string | null;
  confirmPassword: string | null;
  occupation: string;
  otherOccupation: string;
  referredBy: string;
  socialMediaObj: string;
  socialMediaHandle: string;
  about?: string;
  hearingPlatform: string;
  signupSuccess: boolean;
  token: null | string;
  loading: boolean;
};

const defaultFormData: FormDataType = {
  email: "abc@email.com",
  firstName: "",
  lastName: "",
  username: "",
  imgURL: "",
  gender: "",
  otherGender: "",
  sexualOrientation: "",
  otherSexualOrientation: "",
  answers: [],
  verificationStatus: false,
  newUser: true,
  dateOfBirth: "",
  whereLiveCountry: null,
  whereLiveCity: null,
  whereFromCountry: null,
  whereFromCity: null,
  password: null,
  confirmPassword: null,
  occupation: "",
  otherOccupation: "",
  referredBy: "",
  socialMediaObj: "",
  socialMediaHandle: "",
  about: "",
  hearingPlatform: "",
  signupSuccess: false,
  token: null,
  loading: true,
};

const isPersistedFormDataValid = (value: unknown): value is FormDataType => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;

  const data = value as Record<string, unknown>;

  return (
    isStringOrNull(data.email) &&
    typeof data.firstName === "string" &&
    typeof data.lastName === "string" &&
    typeof data.username === "string" &&
    typeof data.imgURL === "string" &&
    typeof data.gender === "string" &&
    typeof data.otherGender === "string" &&
    typeof data.sexualOrientation === "string" &&
    typeof data.otherSexualOrientation === "string" &&
    isAnswerArray(data.answers) &&
    typeof data.verificationStatus === "boolean" &&
    typeof data.newUser === "boolean" &&
    typeof data.dateOfBirth === "string" &&
    isObjectOrNull(data.whereLiveCountry) &&
    isObjectOrNull(data.whereLiveCity) &&
    isObjectOrNull(data.whereFromCountry) &&
    isObjectOrNull(data.whereFromCity) &&
    isStringOrNull(data.password) &&
    isStringOrNull(data.confirmPassword) &&
    typeof data.occupation === "string" &&
    typeof data.otherOccupation === "string" &&
    typeof data.referredBy === "string" &&
    typeof data.socialMediaObj === "string" &&
    typeof data.socialMediaHandle === "string" &&
    (typeof data.about === "string" || typeof data.about === "undefined") &&
    typeof data.hearingPlatform === "string" &&
    typeof data.signupSuccess === "boolean" &&
    isStringOrNull(data.token) &&
    typeof data.loading === "boolean"
  );
};

const hasPersistedSignupMismatch = () =>
  !isStoredDateValid(localStorage.getItem("dateOfBirth")) ||
  !isStoredJsonObjectValid(localStorage.getItem("whereLiveCountry")) ||
  !isStoredJsonObjectValid(localStorage.getItem("whereLiveCity")) ||
  !isStoredJsonObjectValid(localStorage.getItem("whereFromCountry")) ||
  !isStoredJsonObjectValid(localStorage.getItem("whereFromCity"));

type FormContextType = {
  data: FormDataType;
  setData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

const FormContext = createContext<FormContextType>({
  data: defaultFormData,
  setData: () => {},
});

export const useFormContext = () => useContext(FormContext);

type FormProviderProps = { children: ReactNode };

export const FormProvider = ({ children }: FormProviderProps) => {

  const [data, setData] = useState<FormDataType>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("formData");
      const hasPersistedSignupState = persistedSignupStorageKeys.some(
        (key) => localStorage.getItem(key) !== null
      );

      if (
        hasPersistedSignupState &&
        localStorage.getItem(SIGNUP_STORAGE_VERSION_KEY) !== SIGNUP_STORAGE_VERSION
      ) {
        clearPersistedSignupState();
        return defaultFormData;
      }

      if (hasPersistedSignupMismatch()) {
        clearPersistedSignupState();
        return defaultFormData;
      }

      if (saved) {
        try {
          const parsed = JSON.parse(saved);

          if (isPersistedFormDataValid(parsed)) {
            return {
              ...defaultFormData,
              ...parsed,
            };
          }
        } catch {
          // Invalid persisted data should reset the signup flow.
        }

        clearPersistedSignupState();
      }
    }
    return defaultFormData;
  });
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(SIGNUP_STORAGE_VERSION_KEY, SIGNUP_STORAGE_VERSION);
      localStorage.setItem("formData", JSON.stringify(data));
    }
  }, [data]);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};
