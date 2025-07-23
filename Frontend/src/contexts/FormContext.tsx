// FormContext.tsx
import React, { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";

export type FormDataType = {
  firstName: string;
  lastName: string;
  gender: string;
  answers: string[];
};

const defaultFormData: FormDataType = {
  firstName: "",
  lastName: "",
  gender: "",
  answers: [],
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
