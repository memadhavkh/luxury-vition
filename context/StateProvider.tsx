"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

interface StateContextProp {
  menu: string;
  setMenu: (state: string) => void;
}

const StateContext = createContext<StateContextProp | undefined>(undefined);

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState<string>("");

  const handleStateChange = () => {};

  useEffect(() => {
    handleStateChange();
  }, [menu]);

  return (
    <StateContext.Provider value={{ menu, setMenu }}>
      {children}
    </StateContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(StateContext);
}
