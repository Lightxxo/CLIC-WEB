"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";

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
  // Initialize from localStorage if available
  const [data, setData] = useState<FormDataType>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("formData");
      if (saved) return JSON.parse(saved);
    }
    return defaultFormData;
  });

  // Persist to localStorage whenever data changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(data));
    }
  }, [data]);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};
