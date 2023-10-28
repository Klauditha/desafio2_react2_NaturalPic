/* eslint-disable react/prop-types */
import { createContext } from "react";

export const Context = createContext();

export const ProviderContext = ({ children }) => {
  const value = 1;
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
