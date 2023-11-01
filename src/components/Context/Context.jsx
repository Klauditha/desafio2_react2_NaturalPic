/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { photos } from "../../photos.json";
export const Context = createContext();

export const ProviderContext = ({ children }) => {
  const [pictures, setPictures] = useState([]);

  const getData = async () => {
    setPictures(photos);
  };

  useEffect(() => {
    getData();
  });

  return (
    <Context.Provider value={{ pictures, setPictures }}>
      {children}
    </Context.Provider>
  );
};
