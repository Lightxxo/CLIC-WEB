// FormContext.tsx
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
  dateOfBirth: Date | null;
  password: string | null;
  confirmPassword: string | null;
  signupSuccess: boolean;
  token: null | string;
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
  dateOfBirth: null,
  password: null,
  confirmPassword: null,
  signupSuccess: false,
  token: null
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
