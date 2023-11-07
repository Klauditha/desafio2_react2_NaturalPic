/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { photos } from "../../../public/photos.json";
import axios from "axios";
export const Context = createContext();

export const ProviderContext = ({ children }) => {
  const [pictures, setPictures] = useState([]);
  const [favoritesPictures, setFavoritesPictures] = useState([]);

  const getData = async () => {
    axios.get("/photos.json").then((res) => {
      setPictures(res.data);
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <Context.Provider
      value={{ pictures, favoritesPictures, setFavoritesPictures }}
    >
      {children}
    </Context.Provider>
  );
};
