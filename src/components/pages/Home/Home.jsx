/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Context } from "../../Context/Context";
import IconHeart from "../../IconHeart";
import "./Home.css";

const Home = () => {
  const { pictures, setPictures } = useContext(Context);
  const changeFavorite = (id) => {
    pictures.map((picture) => {
      if (picture.id === id)
        setPictures([...pictures], (picture.liked = !picture.liked));
    });
  };

  return (
    <div>
      <h1 className="text-green-500 text-center text-4xl pt-6">Natural Pic</h1>
      <h3 className="text-center pt-2">Haz clic en el icono  🤍 para agregar o quitar a Favoritos</h3>
      <div className="flex flex-wrap" id="picturesContainer">
        {pictures.map((picture) => (
          <div className="p-1 bg-white-500 picture" key={picture.id}>
            <div onClick={() => changeFavorite(picture.id)}>
              <IconHeart filled={picture.liked} />
            </div>
            <img src={picture.src.tiny} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
