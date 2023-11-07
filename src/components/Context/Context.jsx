/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const ProviderContext = ({ children }) => {
  const [pictures, setPictures] = useState([]);

  const getData = async () => {
    axios.get("photos.json").then((res) => {
      setPictures(res.data.photos);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Context.Provider value={{ pictures, setPictures }}>
      {children}
    </Context.Provider>
  );
};
