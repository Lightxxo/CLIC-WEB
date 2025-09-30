"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Pool = {
  title: string;
  imgURL: string;
  description: string;
  date_time: string;
  location: string;
  event_status: boolean;
};

type PoolMap = Record<string, Pool>;

type PoolContextType = {
  data: PoolMap;
  setData: React.Dispatch<React.SetStateAction<PoolMap>>;
};

const PoolContext = createContext<PoolContextType>({
  data: {},
  setData: () => {},
});

export const usePoolContext = () => useContext(PoolContext);

export const PoolProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PoolMap>({});

  return (
    <PoolContext.Provider value={{ data, setData }}>
      {children}
    </PoolContext.Provider>
  );
};
