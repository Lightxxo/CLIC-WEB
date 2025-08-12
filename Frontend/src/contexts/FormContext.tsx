import React, { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";

export type FormDataType = {
  email: string | null;
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  answers: { question: string; selectedAns: string }[];
  verificationStatus: boolean;
  newUser: boolean;
  dateOfBirth: string;
  password: string | null;
  confirmPassword: string | null;
  occupation?: string;
  live?: string;
  from?: string;
  cities?: string;
  about?: string;
  signupSuccess: boolean;
  token: null | string;
  loading: boolean;
};

const defaultFormData: FormDataType = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  gender: "",
  answers: [],
  verificationStatus: false,
  newUser: true,
  dateOfBirth: "",
  password: null,
  confirmPassword: null,
  occupation: "",
  live: "",
  from: "",
  cities: "",
  about: "",
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

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [data, setData] = useState<FormDataType>(defaultFormData);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};
